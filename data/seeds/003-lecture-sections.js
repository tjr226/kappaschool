exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lecture_sections').del()
    .then(function () {
      // Inserts seed entries
      return knex('lecture_sections').insert([
        {id: 1, lecture_section_name: 'Short A 1', lecture_id: 1, order_in_lecture: 1},
        {id: 2, lecture_section_name: 'Short A 2', lecture_id: 1, order_in_lecture: 2},
        {id: 3, lecture_section_name: 'Short A 3', lecture_id: 1, order_in_lecture: 3},
        {id: 4, lecture_section_name: 'Short A 4', lecture_id: 1, order_in_lecture: 4},
        {id: 5, lecture_section_name: 'Short A 5', lecture_id: 1, order_in_lecture: 5},
        {id: 6, lecture_section_name: 'Short E 1', lecture_id: 2, order_in_lecture: 1},
        {id: 7, lecture_section_name: 'Short E 2', lecture_id: 2, order_in_lecture: 2},
        {id: 8, lecture_section_name: 'Short E 3', lecture_id: 2, order_in_lecture: 3},
        {id: 9, lecture_section_name: 'Short E 4', lecture_id: 2, order_in_lecture: 4},
        {id: 10, lecture_section_name: 'Short E 5', lecture_id: 2, order_in_lecture: 5},
        {id: 11, lecture_section_name: 'Short I 1', lecture_id: 3, order_in_lecture: 1},
        {id: 12, lecture_section_name: 'Short I 2', lecture_id: 3, order_in_lecture: 2},
        {id: 13, lecture_section_name: 'Short I 3', lecture_id: 3, order_in_lecture: 3},
        {id: 14, lecture_section_name: 'Short I 4', lecture_id: 3, order_in_lecture: 4},
        {id: 15, lecture_section_name: 'Short I 5', lecture_id: 3, order_in_lecture: 5},
      ]);
    });
};
