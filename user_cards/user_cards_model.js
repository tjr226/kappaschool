const moment = require('moment');
const db = require('../data/dbConfig.js');

module.exports = {
    add,
    addLectureSegmentCardsToUser,
    find,
    findByUserCardId,
    findByLectureId,
    findUnhiddenCardsByUserId,
    hideCard,
    increaseCardTime,
    decreaseCardTime,
    getCurrentAndPreviousCardsForLectureSegment,
    findLecturesByClassId,
    findLectureSegmentsByLectureId,
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

async function addLectureSegmentCardsToUser(lecture_segment_id, user_id) {
    cards = await db('cards').where('lecture_segment_id', lecture_segment_id)
    for (i = 0; i < cards.length; i++) {
        new_user_card = {};
        new_user_card.user_id = user_id;
        new_user_card.card_id = cards[i].id
        new_user_card.hidden_boolean = 0
        new_user_card.unix_timestamp = 0
        await db('user_cards').insert(new_user_card)
    }
    return cards
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
    days_to_wait = Math.min(...filtered_spaced_repetition_days)
    console.log("days to wait", days_to_wait)
    new_unix_timestamp = moment().add(days_to_wait, 'days').format('x');
    return user_card
}

async function decreaseCardTime(user_card_id) {

}

function findByUserCardId(id) {
    return db('user_cards')
        .where({ id })
        .first();
}

function findUnhiddenCardsByUserId(user_id) {
    return db('user_cards')
        .where('user_id', user_id)
        .where('hidden_boolean', 0)
}

function findLecturesByClassId(class_id) {
    return db('lectures')
        .where('class_id', class_id)
}

function findLectureSegmentsByLectureId(lecture_id) {
    return db('lecture_segments')
        .where('lecture_id', lecture_id)
}

function getCurrentAndPreviousCardsForLectureSegment(lecture_segment_id, user_id) {
    return db('user_cards').join('cards', 'user_cards.card_id', 'cards.id')
        .where('user_id', user_id)
        .where('hidden_boolean', 0)
        .andWhere(function () {
            this.where('lecture_segment_id', '<=', lecture_segment_id)
        })
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

// this function was built instead of using the update() function to hide individual cards
// first section is copying the update() functionality to modify the database
// second section is to return the same results as "find by lecture id"
// main change from update... need to add lecture_id to the hide_card function
// in this function, id is the user_card id
async function hideCard(changes, id, user_id, lecture_id) {
    await db('user_cards')
        .where({ id })
        .update(changes)
    return db('user_cards')
        .select(['user_cards.id as user_card_id', 'user_cards.user_id', 'user_cards.card_id', 'user_cards.hidden_boolean', 'user_cards.unix_timestamp',
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


