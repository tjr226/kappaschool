
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class_spaced_repetition_pattern').del()
    .then(function () {
      // Inserts seed entries
      return knex('class_spaced_repetition_pattern').insert([
        {id: 1, class_id: 1, spaced_repetition_pattern_id: 1 },
      ]);
    });
};
