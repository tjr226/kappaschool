const router = require('express').Router();
const UserCards = require('./user_cards_model.js');

// FIND UNHIDDEN CARDS BY USER ID
router.get('/', (req, res) => {
    const user_id = req.user_id;
    UserCards.findUnhiddenCardsByUserId(user_id)
        .then(cards => {
            res.status(200).json(cards);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: "Could not access unhidden cards by user id."})
        })
})

// ADD CARDS FROM LECTURE SEGMENT TO USER
router.get('/addLectureSegmentCards', (req, res) => {
    const user_id = req.body.user_id;
    const lecture_segment_id = req.body.lecture_segment_id;
    // console.log(lecture_segment_id, user_id)
    // cards = await UserCards.addLectureSegmentCardsToUser(lecture_segment_id, user_id)
    // console.log(cards)
    UserCards.addLectureSegmentCardsToUser(lecture_segment_id, user_id)
        .then(cards => {
            res.status(200).json(cards);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
})

module.exports = router;