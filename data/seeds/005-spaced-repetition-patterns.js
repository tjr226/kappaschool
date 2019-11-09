
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('spaced_repetition_patterns').del()
    .then(function () {
      // Inserts seed entries
      return knex('spaced_repetition_patterns').insert([
        {id: 1, name: 'reading_pattern'},
      ]);
    });
};
