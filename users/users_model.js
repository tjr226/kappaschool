const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db('users').select('id', 'email', 'password');
}

function findBy(filter) {
    return db('users').where(filter)
};

// WARNING:
// currently, adding a user will add ALL cards to their user_cards
// this is for Reading Alpha only
async function addAllCardsToUser(user_id) {
    cards = await db('cards')
    for (i = 0; i < cards.length; i++) {
        new_user_card = {};
        new_user_card.user_id = user_id;
        new_user_card.card_id = cards[i].id;
        new_user_card.spaced_repetition_pattern = 1
        new_user_card.previous_spaced_repetition_days = 0;
        new_user_card.hidden_boolean = false;
        new_user_card.next_date_to_review_unix_timestamp = 0;
        await db('user_cards').insert(new_user_card);
    }
}
async function add(user) {
    const [user_id] = await db('users').insert(user);
    // WARNING:
    // currently, adding a user will add ALL cards to their user_cards
    // this is for Reading Alpha only
    addAllCardsToUser(user_id);
    return findById(user_id);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}