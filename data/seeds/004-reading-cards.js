
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reading_cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('reading_cards').insert([
        {id: 1, word: 'mat', word_spaced_by_sounds: 'm a t', word_sentence_example: 'mat is a word', lecture_segment_id: 1},
        {id: 2, word: 'bat', word_spaced_by_sounds: 'b a t', word_sentence_example: 'bat is a word', lecture_segment_id: 1},
        {id: 3, word: 'rat', word_spaced_by_sounds: 'r a t', word_sentence_example: 'rat is a word', lecture_segment_id: 1},
        {id: 4, word: 'fat', word_spaced_by_sounds: 'f a t', word_sentence_example: 'fat is a word', lecture_segment_id: 1},
        {id: 5, word: 'pat', word_spaced_by_sounds: 'p a t', word_sentence_example: 'pat is a word', lecture_segment_id: 1},
        {id: 6, word: 'ham', word_spaced_by_sounds: 'h a m', word_sentence_example: 'ham is a word', lecture_segment_id: 2},
        {id: 7, word: 'jam', word_spaced_by_sounds: 'j a m', word_sentence_example: 'jam is a word', lecture_segment_id: 2},
        {id: 8, word: 'Sam', word_spaced_by_sounds: 'S a m', word_sentence_example: 'Sam is a word', lecture_segment_id: 2},
        {id: 9, word: 'Pam', word_spaced_by_sounds: 'P a m', word_sentence_example: 'Pam is a word', lecture_segment_id: 2},
        {id: 10, word: 'fan', word_spaced_by_sounds: 'f a n', word_sentence_example: 'fan is a word', lecture_segment_id: 3},
        {id: 11, word: 'pan', word_spaced_by_sounds: 'p a n', word_sentence_example: 'pan is a word', lecture_segment_id: 3},
        {id: 12, word: 'Dan', word_spaced_by_sounds: 'D a n', word_sentence_example: 'Dan is a word', lecture_segment_id: 3},
        {id: 13, word: 'Ann', word_spaced_by_sounds: 'A n n', word_sentence_example: 'Ann is a word', lecture_segment_id: 3},
        {id: 14, word: 'van', word_spaced_by_sounds: 'v a n', word_sentence_example: 'van is a word', lecture_segment_id: 3},
        {id: 15, word: 'man', word_spaced_by_sounds: 'm a n', word_sentence_example: 'man is a word', lecture_segment_id: 3},
        {id: 16, word: 'bag', word_spaced_by_sounds: 'b a g', word_sentence_example: 'bag is a word', lecture_segment_id: 4},
        {id: 17, word: 'rag', word_spaced_by_sounds: 'r a g', word_sentence_example: 'rag is a word', lecture_segment_id: 4},
        {id: 18, word: 'wag', word_spaced_by_sounds: 'w a g', word_sentence_example: 'wag is a word', lecture_segment_id: 4},
        {id: 19, word: 'nap', word_spaced_by_sounds: 'n a p', word_sentence_example: 'nap is a word', lecture_segment_id: 4},
        {id: 20, word: 'lap', word_spaced_by_sounds: 'l a p', word_sentence_example: 'lap is a word', lecture_segment_id: 4},
        {id: 21, word: 'tap', word_spaced_by_sounds: 't a p', word_sentence_example: 'tap is a word', lecture_segment_id: 4},
        {id: 22, word: 'map', word_spaced_by_sounds: 'm a p', word_sentence_example: 'map is a word', lecture_segment_id: 4},
        {id: 23, word: 'mad', word_spaced_by_sounds: 'm a d', word_sentence_example: 'mad is a word', lecture_segment_id: 5},
        {id: 24, word: 'had', word_spaced_by_sounds: 'h a d', word_sentence_example: 'had is a word', lecture_segment_id: 5},
        {id: 25, word: 'sad', word_spaced_by_sounds: 's a d', word_sentence_example: 'sad is a word', lecture_segment_id: 5},
        {id: 26, word: 'dad', word_spaced_by_sounds: 'd a d', word_sentence_example: 'dad is a word', lecture_segment_id: 5},
        {id: 27, word: 'gas', word_spaced_by_sounds: 'g a s', word_sentence_example: 'gas is a word', lecture_segment_id: 5},
        {id: 28, word: 'pass', word_spaced_by_sounds: 'p a ss', word_sentence_example: 'pass is a word',  lecture_segment_id: 5},
        {id: 29, word: 'mass', word_spaced_by_sounds: 'm a ss', word_sentence_example: 'mass is a word',  lecture_segment_id: 5}
      ]);
    });
};
