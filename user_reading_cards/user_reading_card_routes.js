const router = require('express').Router();
const UserReadingCards = require('./user_reading_cards_model.js');

// GET all cards for user and lecture
router.get('/lecture/:lecture_id', (req, res) => {
    const lecture_id = req.params.lecture_id;
    const user_id = req.user.user_id
    UserReadingCards.findByLectureId(lecture_id, user_id)
        .then(cards => {
            res.status(200).json(cards);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error);
        })
})

// GET lecture sections for lecture
router.get('/lecture/:lecture_id/sections', (req, res) => {
    const lecture_id = req.params.lecture_id;
    UserReadingCards.findSectionsByLecture(lecture_id)
        .then(sections => {
            res.status(200).json(sections);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

// PUT increase card time
router.put('/:user_reading_card_id/increaseCardTime', (req, res) => {
    const user_reading_card_id = req.params.user_reading_card_id;
    UserReadingCards.increaseCardTime(user_reading_card_id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error);
        })
})

// PUT decrease card time
router.put('/:user_reading_card_id/decreaseCardTime', (req, res) => {
    const user_reading_card_id = req.params.user_reading_card_id;
    UserReadingCards.decreaseCardTime(user_reading_card_id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error);
        })
})

module.exports = router;