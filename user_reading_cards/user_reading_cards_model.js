const moment = require('moment');
const db = require('../data/dbConfig.js');

module.exports = {
    findByLectureId,
    increaseCardTime,
    decreaseCardTime,
    findSectionsByLecture,
    update
}

function findByLectureId(lecture_id, user_id) {
    // NOTE: this query returns an object where "id" is a copy of "Lecture_id"
    // this returns all user_cards from this lecture for the user   
    return db('user_reading_cards')
        .select([
            'user_reading_cards.id as user_reading_card_id', 'user_reading_cards.user_id', 'user_reading_cards.reading_card_id', 
            'user_reading_cards.next_date_to_review_unix_timestamp', 'user_reading_cards.spaced_repetition_pattern', 
            'user_reading_cards.previous_spaced_repetition_days',
            'reading_cards.id as card_id', 'reading_cards.word as word', 'reading_cards.word_spaced_by_sounds as word_spaced_by_sounds',
            'reading_cards.word_sentence_example as word_sentence_example',
            'reading_cards.lecture_segment_id as lecture_segment_id',
            'lecture_segments.id as lecture_segment_id', 'lecture_segments.lecture_id as lecture_id'
        ])
        .join('reading_cards', 'user_reading_cards.reading_card_id', 'reading_cards.id')
        .join('lecture_segments', 'reading_cards.lecture_segment_id', 'lecture_segments.id')
        .where('user_id', user_id)
        .where('lecture_id', lecture_id)
}

function findSectionsByLecture(lecture_id) {
    return db('lecture_segments')
        .where('lecture_id', lecture_id)
        .orderBy('order_in_lecture')
}

async function update(changes, id, user_id) {
    await db('user_reading_cards')
        .where({ id })
        .update(changes)
    return db('user_reading_cards')
        .where('user_id', user_id)
}

async function increaseCardTime(user_reading_card_id) {
    user_reading_card = await db('user_reading_cards').where('id', user_reading_card_id).first()
    reading_card = await db('reading_cards').where('id', user_reading_card.reading_card_id).first()
    lecture_segment = await db('lecture_segments').where('id', reading_card.lecture_segment_id).first()
    lecture = await db('lectures').where('id', lecture_segment.lecture_id).first()
    class_for_reading_card = await db('classes').where('id', lecture.class_id).first()
    class_spaced_repetition_pattern = await db('class_spaced_repetition_pattern').where('class_id', class_for_reading_card.id).first()
    spaced_repetition_days = await db('spaced_repetition_pattern_days').where('spaced_repetition_pattern', class_spaced_repetition_pattern.id)

    let spaced_repetition_days_array = []
    for (i = 0; i < spaced_repetition_days.length; i++ ) {
        spaced_repetition_days_array.push(spaced_repetition_days[i].days)
    }

    filtered_spaced_repetition_days = spaced_repetition_days_array.filter(day => day > user_reading_card.previous_spaced_repetition_days)
    if (filtered_spaced_repetition_days.length > 0) {
        days_to_wait = Math.min(...filtered_spaced_repetition_days)
    } else {
        days_to_wait = user_reading_card.previous_spaced_repetition_days;
    }

    new_unix_timestamp = moment().add(days_to_wait, 'days').subtract(8, 'hours').format('x');

    card_changes = {
        previous_spaced_repetition_days: days_to_wait,
        next_date_to_review_unix_timestamp: new_unix_timestamp
    }

   new_card = update(card_changes, user_reading_card.id, user_reading_card.user_id)
   
   return findByLectureId(lecture.id, user_reading_card.user_id)
}

async function decreaseCardTime(user_reading_card_id) {
    user_reading_card = await db('user_reading_cards').where('id', user_reading_card_id).first()
    reading_card = await db('reading_cards').where('id', user_reading_card.reading_card_id).first()
    lecture_segment = await db('lecture_segments').where('id', reading_card.lecture_segment_id).first()
    lecture = await db('lectures').where('id', lecture_segment.lecture_id).first()
    class_for_reading_card = await db('classes').where('id', lecture.class_id).first()
    class_spaced_repetition_pattern = await db('class_spaced_repetition_pattern').where('class_id', class_for_reading_card.id).first()
    spaced_repetition_days = await db('spaced_repetition_pattern_days').where('spaced_repetition_pattern', class_spaced_repetition_pattern.id)

    let spaced_repetition_days_array = []
    for (i = 0; i < spaced_repetition_days.length; i++ ) {
        spaced_repetition_days_array.push(spaced_repetition_days[i].days)
    }
    
    filtered_spaced_repetition_days = spaced_repetition_days_array.filter(day => day < user_reading_card.previous_spaced_repetition_days)
    if (filtered_spaced_repetition_days.length > 0) {
        days_to_wait = Math.max(...filtered_spaced_repetition_days)
    } else {
        days_to_wait = user_reading_card.previous_spaced_repetition_days;
    }

    new_unix_timestamp = moment().add(days_to_wait, 'days').subtract(8, 'hours').format('x');

    card_changes = {
        previous_spaced_repetition_days: days_to_wait,
        next_date_to_review_unix_timestamp: new_unix_timestamp
    }

    new_card = update(card_changes, user_reading_card.id, user_reading_card.user_id)
   
    return findByLectureId(lecture.id, user_reading_card.user_id)
}