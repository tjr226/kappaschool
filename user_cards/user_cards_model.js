const db = require('../data/dbConfig.js');

module.exports = {
    add,
    addLectureSegmentCardsToUser,
    find,
    findByUserCardId,
    findByLectureId,
    findUnhiddenCardsByUserId,
    getCurrentAndPreviousCardsForLectureSegment,
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

function getCurrentAndPreviousCardsForLectureSegment(lecture_segment_id, user_id) {
    return db('user_cards').join('cards', 'user_cards.card_id', 'cards.id')
        .where('user_id', user_id)
        .where('hidden_boolean', 0)
        .andWhere(function() {
            this.where('lecture_segment_id', '<=', lecture_segment_id)
        })
}

// NOTE: this query returns an object where "id" is a copy of "Lecture_id"
function findByLectureId(lecture_id, user_id) {
    return db('user_cards')
        .select([ 'user_cards.id as user_card_id', 'user_cards.user_id', 'user_cards.card_id', 'user_cards.hidden_boolean', 'user_cards.unix_timestamp',
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


