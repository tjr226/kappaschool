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
        .createTable('lecture_sections', lecture_sections => {
            lecture_sections.increments();
            lecture_sections.string('lecture_section_name').notNullable();
            lecture_sections.integer('lecture_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('lectures')
            lecture_sections.integer('order_in_lecture')
                .unsigned()
                .notNullable()
        })
        .createTable('question_cards', question_cards => {
            question_cards.increments()
            question_cards.string('question').notNullable();
            question_cards.string('answer').notNullable();
            question_cards.integer('lecture_section_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('lecture_sections');
        })
        .createTable('reading_cards', reading_cards => {
            reading_cards.increments()
            reading_cards.string('word').notNullable();
            reading_cards.string('word_spaced_by_sounds').notNullable();
            reading_cards.string('word_sentence_example', 512).notNullable();
            reading_cards.integer('lecture_section_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('lecture_sections');
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
        .createTable('class_spaced_repetition_pattern', class_pattern => {
            class_pattern.increments();
            class_pattern.integer('class_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('classes')
                .unique()
            class_pattern.integer('spaced_repetition_pattern_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('spaced_repetition_patterns')
        })
        .createTable('user_question_cards', user_question_cards => {
            user_question_cards.increments()
            user_question_cards.integer('user_id')
                // user id FK
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
            user_question_cards.integer('question_card_id')
                // question card id FK
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('question_cards')
            user_question_cards.integer('spaced_repetition_pattern')
                // spaced repetition pattern FK
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('spaced_repetition_patterns')
            user_question_cards.integer('previous_spaced_repetition_days')
                // tracks the amount of days a card was "pushed"
                // this should probably start at zero for every card
                .unsigned()
                .notNullable()
            user_question_cards.integer('next_date_to_review_unix_timestamp')
                .unsigned()
                .notNullable()
        })
        .createTable('user_reading_cards', user_reading_cards => {
            user_reading_cards.increments()
            user_reading_cards.integer('user_id')
                // user id FK
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
            user_reading_cards.integer('reading_card_id')
                // reading card id FK
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('reading_cards')
            user_reading_cards.integer('spaced_repetition_pattern')
                // spaced repetition pattern FK
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('spaced_repetition_patterns')
            user_reading_cards.integer('previous_spaced_repetition_days')
                // tracks the amount of days a card was "pushed"
                // this should probably start at zero for every card
                .unsigned()
                .notNullable()
            user_reading_cards.integer('next_date_to_review_unix_timestamp')
                .unsigned()
                .notNullable()
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('user_reading_cards')
        .dropTableIfExists('user_question_cards')
        .dropTableIfExists('class_spaced_repetition_pattern')
        .dropTableIfExists('spaced_repetition_pattern_days')
        .dropTableIfExists('spaced_repetition_patterns')
        .dropTableIfExists('reading_cards')
        .dropTableIfExists('question_cards')
        .dropTableIfExists('lecture_sections')
        .dropTableIfExists('lectures')
        .dropTableIfExists('classes')
        .dropTableIfExists('users')
};
