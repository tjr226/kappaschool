
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {id: 1, question: 'mat', answer: 'mat', lecture_segment_id: 1},
        {id: 2, question: 'bat', answer: 'bat', lecture_segment_id: 1},
        {id: 3, question: 'rat', answer: 'rat', lecture_segment_id: 1},
        {id: 4, question: 'fat', answer: 'fat', lecture_segment_id: 1},
        {id: 5, question: 'Pat', answer: 'Pat', lecture_segment_id: 1},
        {id: 6, question: 'ham', answer: 'ham', lecture_segment_id: 1},
        {id: 7, question: 'jam', answer: 'jam', lecture_segment_id: 2},
        {id: 8, question: 'Sam', answer: 'Sam', lecture_segment_id: 2},
        {id: 9, question: 'Pam', answer: 'Pam', lecture_segment_id: 2},
        {id: 10, question: 'fan', answer: 'fan', lecture_segment_id: 2},
        {id: 11, question: 'pan', answer: 'pan', lecture_segment_id: 2},
        {id: 12, question: 'Dan', answer: 'Dan', lecture_segment_id: 2},
        {id: 13, question: 'Ann', answer: 'Ann', lecture_segment_id: 3},
        {id: 14, question: 'van', answer: 'van', lecture_segment_id: 3},
        {id: 15, question: 'man', answer: 'man', lecture_segment_id: 3},
        {id: 16, question: 'bag', answer: 'bag', lecture_segment_id: 3},
        {id: 17, question: 'rag', answer: 'rag', lecture_segment_id: 3},
        {id: 18, question: 'wag', answer: 'wag', lecture_segment_id: 4},
        {id: 19, question: 'nap', answer: 'nap', lecture_segment_id: 4},
        {id: 20, question: 'lap', answer: 'lap', lecture_segment_id: 4},
        {id: 21, question: 'tap', answer: 'tap', lecture_segment_id: 4},
        {id: 22, question: 'map', answer: 'map', lecture_segment_id: 4},
        {id: 23, question: 'mad', answer: 'mad', lecture_segment_id: 5},
        {id: 24, question: 'had', answer: 'had', lecture_segment_id: 5},
        {id: 25, question: 'sad', answer: 'sad', lecture_segment_id: 5},
        {id: 26, question: 'dad', answer: 'dad', lecture_segment_id: 5},
        {id: 27, question: 'gas', answer: 'gas', lecture_segment_id: 5},
        {id: 28, question: 'pass', answer: 'pass', lecture_segment_id: 5},
      ]);
    });
};
