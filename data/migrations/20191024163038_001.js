// adding users, classes, and lectures

exports.up = function (knex) {
    return knex.schema
        .createTable('users', users => {
            users.increments();
            users.string('email', 128).notNullable().unique();
            users.string('password', 256).notNullable();
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
        })
        .createTable('lecture_segments', lecture_segments => {
            lecture_segments.increments();
            lecture_segments.string('lecture_segment_name').notNullable();
            lecture_segments.integer('lecture_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('lectures')
        })
        .createTable('cards', cards => {
            cards.increments()
            cards.string('question').notNullable();
            cards.string('answer').notNullable();
            cards.integer('lecture_segment_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('lecture_segments')
        })
        .createTable('user_cards', user_cards => {
            user_cards.increments()
            user_cards.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
            user_cards.integer('card_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('cards')
            user_cards.boolean('hidden_boolean').notNullable()
            user_cards.integer('unix_timestamp')
                .unsigned()
                .notNullable()
        })
        .createTable('user_classes', user_classes => {
            user_classes.increments()
            user_classes.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
            user_classes.integer('class_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('classes')
            user_classes.boolean('in_progress_boolean').notNullable()
            user_classes.boolean('completed_boolean').notNullable()
        })
        .createTable('user_lectures', user_lectures => {
            user_lectures.increments()
            user_lectures.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
            user_lectures.integer('lecture_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('lectures')
            user_lectures.boolean('in_progress_boolean').notNullable()
            user_lectures.boolean('completed_boolean').notNullable()
        })
        .createTable('user_lecture_segments', user_lecture_segments => {
            user_lecture_segments.increments()
            user_lecture_segments.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
            user_lecture_segments.integer('lecture_segment_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('lecture_segments')
            user_lecture_segments.boolean('in_progress_boolean').notNullable()
            user_lecture_segments.boolean('completed_boolean').notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('user_lecture_segments')
        .dropTableIfExists('user_lectures')
        .dropTableIfExists('user_classes')
        .dropTableIfExists('user_cards')
        .dropTableIfExists('cards')
        .dropTableIfExists('lecture_segments')
        .dropTableIfExists('lectures')
        .dropTableIfExists('classes')
        .dropTableIfExists('users')
};
