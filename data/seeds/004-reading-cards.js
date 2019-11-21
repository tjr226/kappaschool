
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reading_cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('reading_cards').insert([
        {id: 1, word: 'mat', word_spaced_by_sounds: 'm a t', word_sentence_example: 'Wipe your feet on the mat.', lecture_segment_id: 1},
        {id: 2, word: 'bat', word_spaced_by_sounds: 'b a t', word_sentence_example: 'Use the bat to hit the ball.', lecture_segment_id: 1},
        {id: 3, word: 'cat', word_spaced_by_sounds: 'c a t', word_sentence_example: 'You can pet the cat.', lecture_segment_id: 1},
        {id: 4, word: 'fat', word_spaced_by_sounds: 'f a t', word_sentence_example: 'This cat is fat.', lecture_segment_id: 1},
        {id: 5, word: 'pat', word_spaced_by_sounds: 'p a t', word_sentence_example: 'Use a pat of butter.', lecture_segment_id: 1},
        {id: 6, word: 'ham', word_spaced_by_sounds: 'h a m', word_sentence_example: 'People can eat ham.', lecture_segment_id: 2},
        {id: 7, word: 'jam', word_spaced_by_sounds: 'j a m', word_sentence_example: 'Put jam on a sandwich.', lecture_segment_id: 2},
        {id: 8, word: 'Sam', word_spaced_by_sounds: 'S a m', word_sentence_example: 'Sam likes to eat jam.', lecture_segment_id: 2},
        {id: 9, word: 'Pam', word_spaced_by_sounds: 'P a m', word_sentence_example: 'Pam wants to pet the cat.', lecture_segment_id: 2},
        {id: 10, word: 'fan', word_spaced_by_sounds: 'f a n', word_sentence_example: 'A fan cools us down.', lecture_segment_id: 3},
        {id: 11, word: 'pan', word_spaced_by_sounds: 'p a n', word_sentence_example: 'Use a pan to cook food.', lecture_segment_id: 3},
        {id: 12, word: 'Dan', word_spaced_by_sounds: 'D a n', word_sentence_example: 'Dan is holding a bat.', lecture_segment_id: 3},
        {id: 13, word: 'Ann', word_spaced_by_sounds: 'A n n', word_sentence_example: 'Ann is holding a bat.', lecture_segment_id: 3},
        {id: 14, word: 'van', word_spaced_by_sounds: 'v a n', word_sentence_example: 'We can go for a ride in a van.', lecture_segment_id: 3},
        {id: 15, word: 'man', word_spaced_by_sounds: 'm a n', word_sentence_example: 'The man drives a van.', lecture_segment_id: 3},
        {id: 16, word: 'bag', word_spaced_by_sounds: 'b a g', word_sentence_example: 'You can hold things in a bag.', lecture_segment_id: 4},
        {id: 17, word: 'rag', word_spaced_by_sounds: 'r a g', word_sentence_example: 'Wipe things with a rag.', lecture_segment_id: 4},
        {id: 18, word: 'wag', word_spaced_by_sounds: 'w a g', word_sentence_example: 'The dog wags its tail.', lecture_segment_id: 4},
        {id: 19, word: 'nap', word_spaced_by_sounds: 'n a p', word_sentence_example: 'The cat takes a nap.', lecture_segment_id: 4},
        {id: 20, word: 'lap', word_spaced_by_sounds: 'l a p', word_sentence_example: 'The cup is on his lap.', lecture_segment_id: 4},
        {id: 21, word: 'tap', word_spaced_by_sounds: 't a p', word_sentence_example: 'Water comes from the tap.', lecture_segment_id: 4},
        {id: 22, word: 'map', word_spaced_by_sounds: 'm a p', word_sentence_example: 'The map shows the whole world.', lecture_segment_id: 4},
        {id: 23, word: 'mad', word_spaced_by_sounds: 'm a d', word_sentence_example: 'The person is mad.', lecture_segment_id: 5},
        {id: 24, word: 'had', word_spaced_by_sounds: 'h a d', word_sentence_example: 'Anna had a map.', lecture_segment_id: 5},
        {id: 25, word: 'sad', word_spaced_by_sounds: 's a d', word_sentence_example: 'Dan was sad.', lecture_segment_id: 5},
        {id: 26, word: 'dad', word_spaced_by_sounds: 'd a d', word_sentence_example: 'Dad cooks food in the pan.', lecture_segment_id: 5},
        {id: 27, word: 'gas', word_spaced_by_sounds: 'g a s', word_sentence_example: 'Air is a gas around us.', lecture_segment_id: 5},
        {id: 28, word: 'pass', word_spaced_by_sounds: 'p a ss', word_sentence_example: 'Pass me the jam.',  lecture_segment_id: 5},
        {id: 29, word: 'mass', word_spaced_by_sounds: 'm a ss', word_sentence_example: 'The fat cat has a lot of mass.',  lecture_segment_id: 5},
        {id: 30, word: 'yes', word_spaced_by_sounds: 'y e s', word_sentence_example: "Yes, I would like a cookie.", lecture_segment_id: 6},
        {id: 31, word: 'mess', word_spaced_by_sounds: 'm e ss', word_sentence_example: "There is a mess in the room.", lecture_segment_id: 6},
        {id: 32, word: 'less', word_spaced_by_sounds: 'l e ss', word_sentence_example: "There is less water in this bucket.", lecture_segment_id: 6},
        {id: 33, word: 'pen', word_spaced_by_sounds: 'p e n', word_sentence_example: "I write with a pen.", lecture_segment_id: 7},
        {id: 34, word: 'hen', word_spaced_by_sounds: 'h e n', word_sentence_example: "The hen is on a farm.", lecture_segment_id: 7},
        {id: 35, word: 'men', word_spaced_by_sounds: 'm e n', word_sentence_example: "The men are standing.", lecture_segment_id: 7},
        {id: 36, word: 'Ben', word_spaced_by_sounds: 'B e n', word_sentence_example: "Ben is playing.", lecture_segment_id: 7},
        {id: 37, word: 'ten', word_spaced_by_sounds: 't e n', word_sentence_example: "I can count to ten.", lecture_segment_id: 7},
        {id: 38, word: 'net', word_spaced_by_sounds: 'n e t', word_sentence_example: "The butterfly is in the net.", lecture_segment_id: 8},
        {id: 39, word: 'pet', word_spaced_by_sounds: 'p e t', word_sentence_example: "A dog is a pet.", lecture_segment_id: 8},
        {id: 40, word: 'get', word_spaced_by_sounds: 'g e t', word_sentence_example: "I will get a cookie.", lecture_segment_id: 8},
        {id: 41, word: 'set', word_spaced_by_sounds: 's e t', word_sentence_example: "I set the cup down.", lecture_segment_id: 8},
        {id: 42, word: 'let', word_spaced_by_sounds: 'l e t', word_sentence_example: "Let the dog outside.", lecture_segment_id: 8},
        {id: 43, word: 'jet', word_spaced_by_sounds: 'j e t', word_sentence_example: "You can fly on a jet.", lecture_segment_id: 8},
        {id: 44, word: 'wet', word_spaced_by_sounds: 'w e t', word_sentence_example: "You can get wet in the rain.", lecture_segment_id: 8},
        {id: 45, word: 'bell', word_spaced_by_sounds: 'b e ll', word_sentence_example: "Let's ring the bell.", lecture_segment_id: 9},
        {id: 46, word: 'tell', word_spaced_by_sounds: 't e ll', word_sentence_example: "I tell you that I love you.", lecture_segment_id: 9},
        {id: 47, word: 'well', word_spaced_by_sounds: 'w e ll', word_sentence_example: "You can get water from a well", lecture_segment_id: 9},
        {id: 48, word: 'fell', word_spaced_by_sounds: 'f e ll', word_sentence_example: "Ben fell down.", lecture_segment_id: 9},
        {id: 49, word: 'yell', word_spaced_by_sounds: 'y e ll', word_sentence_example: "You can yell outside.", lecture_segment_id: 9},
        {id: 50, word: 'Ed', word_spaced_by_sounds: 'E d', word_sentence_example: 'Ed writes with a pen.', lecture_segment_id: 10},
        {id: 51, word: 'red', word_spaced_by_sounds: 'r e d', word_sentence_example: 'The pen is red.', lecture_segment_id: 10},
        {id: 52, word: 'bed', word_spaced_by_sounds: 'b e d', word_sentence_example: 'People sleep in a bed.', lecture_segment_id: 10},
        {id: 53, word: 'egg', word_spaced_by_sounds: 'e gg', word_sentence_example: 'Cook an egg in a pan.', lecture_segment_id: 10},
        {id: 54, word: 'peg', word_spaced_by_sounds: 'p e g', word_sentence_example: 'Put the peg in the hole.', lecture_segment_id: 10},
        {id: 55, word: 'leg', word_spaced_by_sounds: 'l e g', word_sentence_example: 'We use our leg to run.', lecture_segment_id: 10},
        {id: 56, word: 'web', word_spaced_by_sounds: 'w e b', word_sentence_example: 'The spider makes a web.', lecture_segment_id: 10},
        {id: 57, word: 'miss', word_spaced_by_sounds: 'm i ss', word_sentence_example: 'Miss Ann was in the park.', lecture_segment_id: 11},
        {id: 58, word: 'sis', word_spaced_by_sounds: 's i s', word_sentence_example: 'I have a little sis.', lecture_segment_id: 11},
        {id: 59, word: 'bit', word_spaced_by_sounds: 'b i t', word_sentence_example: 'I bit the food.', lecture_segment_id: 11},
        {id: 60, word: 'sit', word_spaced_by_sounds: 's i t', word_sentence_example: 'We sit on chairs.', lecture_segment_id: 11},
        {id: 61, word: 'hit', word_spaced_by_sounds: 'h i t', word_sentence_example: 'Hit the ball with the bat.', lecture_segment_id: 11},
        {id: 62, word: 'in', word_spaced_by_sounds: 'i n', word_sentence_example: 'The animal is in the box.', lecture_segment_id: 12},
        {id: 63, word: 'pin', word_spaced_by_sounds: 'p i n', word_sentence_example: 'Mark the map with a pin.', lecture_segment_id: 12},
        {id: 64, word: 'rip', word_spaced_by_sounds: 'r i p', word_sentence_example: 'My jeans have a rip in them.', lecture_segment_id: 12},
        {id: 65, word: 'tip', word_spaced_by_sounds: 't i p', word_sentence_example: 'It was on the tip of my tongue.', lecture_segment_id: 12},
        {id: 66, word: 'zip', word_spaced_by_sounds: 'z i p', word_sentence_example: 'Zip up your jacket.', lecture_segment_id: 12},
        {id: 67, word: 'sip', word_spaced_by_sounds: 's i p', word_sentence_example: 'Take a sip from the cup.', lecture_segment_id: 12},
        {id: 68, word: 'ill', word_spaced_by_sounds: 'i ll', word_sentence_example: 'The kid is feeling ill.', lecture_segment_id: 13},
        {id: 69, word: 'will', word_spaced_by_sounds: 'w i ll', word_sentence_example: 'We will go to the park.', lecture_segment_id: 13},
        {id: 70, word: 'mill', word_spaced_by_sounds: 'm i ll', word_sentence_example: 'They make flour in the mill.', lecture_segment_id: 13},
        {id: 71, word: 'hill', word_spaced_by_sounds: 'h i ll', word_sentence_example: 'Run up the hill.', lecture_segment_id: 13},
        {id: 72, word: 'Bill', word_spaced_by_sounds: 'B i ll', word_sentence_example: 'Bill sits near his sis.', lecture_segment_id: 13},
        {id: 73, word: 'Jill', word_spaced_by_sounds: 'J i ll', word_sentence_example: 'Jill is ill.', lecture_segment_id: 13},
        {id: 74, word: 'hid', word_spaced_by_sounds: 'h i d', word_sentence_example: 'The kid hid.', lecture_segment_id: 14},
        {id: 75, word: 'did', word_spaced_by_sounds: 'd i d', word_sentence_example: 'Look at what the dog did.', lecture_segment_id: 14},
        {id: 76, word: 'wig', word_spaced_by_sounds: 'w i g', word_sentence_example: 'Some people wear a wig.', lecture_segment_id: 14},
        {id: 77, word: 'dig', word_spaced_by_sounds: 'd i g', word_sentence_example: 'They went to dig a hole.', lecture_segment_id: 14},
        {id: 78, word: 'pig', word_spaced_by_sounds: 'p i g', word_sentence_example: 'The pig lives on a farm.', lecture_segment_id: 14},
        {id: 79, word: 'big', word_spaced_by_sounds: 'b i g', word_sentence_example: 'This is a big hill.', lecture_segment_id: 14},
        {id: 80, word: 'Tim', word_spaced_by_sounds: 'T i m', word_sentence_example: 'Tim will hit the ball.', lecture_segment_id: 15},
        {id: 81, word: 'him', word_spaced_by_sounds: 'h i m', word_sentence_example: 'Ann went to visit him.', lecture_segment_id: 15},
        {id: 82, word: 'Jim', word_spaced_by_sounds: 'J i m', word_sentence_example: 'Jim took a nap in his bed.', lecture_segment_id: 15},
        {id: 83, word: 'rib', word_spaced_by_sounds: 'r i b', word_sentence_example: 'You can eat a rib.', lecture_segment_id: 15},
        {id: 84, word: 'bib', word_spaced_by_sounds: 'b i b', word_sentence_example: 'Wear a bib when you eat.', lecture_segment_id: 15},
        // {id: , word: , word_spaced_by_sounds: , word_sentence_example: , lecture_segment_id: },
        // {id: , word: , word_spaced_by_sounds: , word_sentence_example: , lecture_segment_id: },
        // {id: , word: , word_spaced_by_sounds: , word_sentence_example: , lecture_segment_id: },
        // {id: , word: , word_spaced_by_sounds: , word_sentence_example: , lecture_segment_id: },
        // {id: , word: , word_spaced_by_sounds: , word_sentence_example: , lecture_segment_id: },
        // {id: , word: , word_spaced_by_sounds: , word_sentence_example: , lecture_segment_id: },
        // {id: , word: , word_spaced_by_sounds: , word_sentence_example: , lecture_segment_id: },
        // {id: , word: , word_spaced_by_sounds: , word_sentence_example: , lecture_segment_id: },
        // {id: , word: , word_spaced_by_sounds: , word_sentence_example: , lecture_segment_id: },
        // {id: , word: , word_spaced_by_sounds: , word_sentence_example: , lecture_segment_id: },
        // {id: , word: , word_spaced_by_sounds: , word_sentence_example: , lecture_segment_id: },
      
      ]);
    });
};