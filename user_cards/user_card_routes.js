const router = require('express').Router();
const UserCards = require('./user_cards_model.js');

// GET ALL CARDS FOR USER by lecture id
router.get('/lecture/:lecture_id', (req, res) => {
    const lecture_id = req.params.lecture_id;
    const user_id = req.user.user_id
    UserCards.findByLectureId(lecture_id, user_id)
        .then(cards => {
            res.status(200).json(cards);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error);
        })
})

router.put('/:user_card_id/increaseCardTime', (req, res) => {
    const user_card_id = req.params.user_card_id;
    UserCards.increaseCardTime(user_card_id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error);
        })
})

module.exports = router;