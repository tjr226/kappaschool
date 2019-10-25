const db = require('../data/dbConfig.js');

module.exports = {
    add,
    addLectureSegmentCardsToUser,
    find,
    findByUserCardId,
    findUnhiddenCardsByUserId,
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

// IN PROGRESS
async function addLectureSegmentCardsToUser(lecture_segment_id, user_id) {
    cards = await db('cards').where('lecture_segment_id', lecture_segment_id)
        for (i = 0; i < cards.length; i++) {
            // console.log(cards[i])
            // console.log(i.id)
            // console.log(cards[i].id)
            new_user_card = {};
            new_user_card.user_id = user_id;
            new_user_card.card_id = cards[i].id
            new_user_card.hidden_boolean = 0
            new_user_card.unix_timestamp = 0
            console.log(new_user_card)
            await db('user_cards').insert(new_user_card)

        } 
    // lecture_segment_cards = await db('cards').where('lecture_segment_id', lecture_segment_id)
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


