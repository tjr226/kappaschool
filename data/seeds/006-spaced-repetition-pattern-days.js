
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('spaced_repetition_pattern_days').del()
    .then(function () {
      // Inserts seed entries
      return knex('spaced_repetition_pattern_days').insert([
        {id: 1, spaced_repetition_pattern: 1, days: 1},
        {id: 2, spaced_repetition_pattern: 1, days: 2},
        {id: 3, spaced_repetition_pattern: 1, days: 4},
        {id: 4, spaced_repetition_pattern: 1, days: 7}
      ]);
    });
};
