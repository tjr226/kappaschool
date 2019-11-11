// adding users, classes, and lectures

exports.up = function (knex) {
    return knex.schema
        // .debug()
        .createTable('users', users => {
            users.increments();
            users.string('email', 128).notNullable().unique();
            users.string('password', 256).notNullable();
            // users.unique('email');
        })
        .createTable('classes', classes => {
            classes.increments();
            classes.string('class_name').notNullable();
        })
        .createTable('lectures', lectures => {
            lectures.increments();
            lectures.string('lecture_name').notNullable();
            lectures.integer('class_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('classes')
            lectures.integer('order_in_class')
                .unsigned()
                .notNullable()
        })
        .createTable('lecture_segments', lecture_segments => {
            lecture_segments.increments();
            lecture_segments.string('lecture_segment_name').notNullable();
            lecture_segments.integer('lecture_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('lectures')
            lecture_segments.integer('order_in_lecture')
                .unsigned()
                .notNullable()
        })
        .createTable('cards', cards => {
            cards.increments()
            cards.string('question').notNullable();
            cards.string('answer').notNullable();
            cards.integer('lecture_segment_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('lecture_segments');
        })
        .createTable('spaced_repetition_patterns', patterns => {
            patterns.increments();
            patterns.string('name').notNullable();
        })
        .createTable('spaced_repetition_pattern_days', days => {
            days.increments();
            days.integer('days').unsigned().notNullable();
            days.integer('spaced_repetition_pattern')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('spaced_repetition_patterns');
        })
        .createTable('user_cards', user_cards => {
            user_cards.increments()
            user_cards.integer('user_id')
                // user id FK
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
            user_cards.integer('card_id')
                // card id FK
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('cards')
            user_cards.integer('spaced_repetition_pattern')
                // spaced repetition pattern FK
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('patterns')
            user_cards.integer('previous_spaced_repetition_days')
                // tracks the amount of days a card was "pushed"
                // this should probably start at zero for every card
                .unsigned()
                .notNullable()
            user_cards.boolean('hidden_boolean').notNullable()
            user_cards.integer('next_date_to_review_unix_timestamp')
                .unsigned()
                .notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('user_cards')
        .dropTableIfExists('spaced_repetition_pattern_days')
        .dropTableIfExists('spaced_repetition_patterns')
        .dropTableIfExists('cards')
        .dropTableIfExists('lecture_segments')
        .dropTableIfExists('lectures')
        .dropTableIfExists('classes')
        .dropTableIfExists('users')
};
