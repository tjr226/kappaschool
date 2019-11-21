
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lectures').del()
    .then(function () {
      // Inserts seed entries
      return knex('lectures').insert([
        {id: 1, lecture_name: 'Short A', class_id: 1, order_in_class: 1},
        {id: 2, lecture_name: 'Short E', class_id: 1, order_in_class: 2},
        {id: 3, lecture_name: 'Short I', class_id: 1, order_in_class: 3},
        {id: 4, lecture_name: 'Short O', class_id: 1, order_in_class: 4},
        {id: 5, lecture_name: 'Short U', class_id: 1, order_in_class: 5},
      ]);
    });
};
