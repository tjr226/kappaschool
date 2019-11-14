const moment = require('moment');
const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findByUserCardId,
    findByLectureId,
    increaseCardTime,
    decreaseCardTime,
    update,
    remove
}

function find() {
    return db('user_cards');
}

async function add(user_card) {
    await db('user_cards').insert(user_card);
    return findByUserId(user_card.user_id);
}

async function increaseCardTime(user_card_id) {
    user_card = await db('user_cards').where('id', user_card_id).first()
    card = await db('cards').where('id', user_card.card_id).first()
    lecture_segment = await db('lecture_segments').where('id', card.lecture_segment_id).first()
    lecture = await db('lectures').where('id', lecture_segment.lecture_id).first()
    class_for_card = await db('classes').where('id', lecture.class_id).first()
    class_spaced_repetition_pattern = await db('class_spaced_repetition_pattern').where('class_id', class_for_card.id).first()
    spaced_repetition_days = await db('spaced_repetition_pattern_days').where('spaced_repetition_pattern', class_spaced_repetition_pattern.id)
    // console.log(user_card, card, lecture_segment, lecture, class_for_card, class_spaced_repetition_pattern)
    // console.log(spaced_repetition_days)
    let spaced_repetition_days_array = []
    for (i = 0; i < spaced_repetition_days.length; i++ ) {
        spaced_repetition_days_array.push(spaced_repetition_days[i].days)
    }
    console.log(user_card, spaced_repetition_days_array)
    // console.log("previous", user_card.previous_spaced_repetition_days)
    filtered_spaced_repetition_days = spaced_repetition_days_array.filter(day => day > user_card.previous_spaced_repetition_days)
    if (filtered_spaced_repetition_days.length > 0) {
        days_to_wait = Math.min(...filtered_spaced_repetition_days)
    } else {
        days_to_wait = user_card.previous_spaced_repetition_days;
    }

    new_unix_timestamp = moment().add(days_to_wait, 'days').format('x');

    card_changes = {
        previous_spaced_repetition_days: days_to_wait,
        next_date_to_review_unix_timestamp: new_unix_timestamp
    }

    console.log(card_changes)
    
    new_card = update(card_changes, user_card.id, user_card.user_id)

    // for first draft of this, don't return anything
    // just focus on pushing the correct amount of time
    return user_card
}

async function decreaseCardTime(user_card_id) {

}

function findByUserCardId(id) {
    return db('user_cards')
        .where({ id })
        .first();
}

// NOTE: this query returns an object where "id" is a copy of "Lecture_id"
// this returns all user_cards from this lecture for the user
function findByLectureId(lecture_id, user_id) {
    return db('user_cards')
        .select([
            'user_cards.id as user_card_id', 'user_cards.user_id', 'user_cards.card_id', 'user_cards.hidden_boolean', 'user_cards.next_date_to_review_unix_timestamp',
            'user_cards.spaced_repetition_pattern', 'user_cards.previous_spaced_repetition_days',
            'cards.id as card_id', 'cards.question as card_question', 'cards.answer as card_answer', 'cards.lecture_segment_id as lecture_segment_id',
            'lecture_segments.id as lecture_segment_id', 'lecture_segments.lecture_id as lecture_id'
        ])
        .join('cards', 'user_cards.card_id', 'cards.id')
        .join('lecture_segments', 'cards.lecture_segment_id', 'lecture_segments.id')
        .where('user_id', user_id)
        .where('lecture_id', lecture_id)
}

async function update(changes, id, user_id) {
    await db('user_cards')
        .where({ id })
        .update(changes)
    return db('user_cards')
        .where('user_id', user_id)
}

function remove(id) {
    return db('user_cards')
        .where('id', id)
        .del();
}


