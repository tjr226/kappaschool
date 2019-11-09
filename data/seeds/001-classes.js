
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {id: 1, class_name: 'Learn how to Read'},
        {id: 2, class_name: 'Learn arithmetic'},
      ]);
    });
};
