const router = require('express').Router();
const UserCards = require('./user_cards_model.js');

// GET ALL UNHIDDEN CARDS BY USER ID
router.get('/', (req, res) => {
    // const user_id = req.body.user_id;
    // console.log(req.user)
    UserCards.findUnhiddenCardsByUserId(req.user.user_id)
        .then(cards => {
            res.status(200).json(cards);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: "Could not access unhidden cards by user id." })
        })
})

// get Lectures by Class Id
router.get('/class/:class_id/findLectures', (req, res) => {
    const class_id = req.params.class_id;
    UserCards.findLecturesByClassId(class_id)
        .then(lectures => {
            res.status(200).json(lectures);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: "Could not get lectures by class id." })
        })
})


// get Lecture Segments by Lecture Id
router.get('/lecture/:lecture_id/findLectureSegments', (req, res) => {
    const lecture_id = req.params.lecture_id;
    UserCards.findLectureSegmentsByLectureId(lecture_id)
        .then(lecture_segments => {
            res.status(200).json(lecture_segments);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: "Could not get lecture segments by lecture id." })
        })
})


// hide UserCards
router.put('/:user_card_id/lecture/:lecture_id/hideCard', (req, res) => {
    const lecture_id = req.params.lecture_id;
    const user_card_id = req.params.user_card_id;
    const user_id = req.user.user_id;
    const changes = { hidden_boolean: 1 };
    UserCards.hideCard(changes, user_card_id, user_id, lecture_id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json(error);
        })
    })

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

// GET cards with lecture segment <= current lecture segment, and not hidden by the user
// don't need lecture_id for Trig Demo
router.get('/currentAndPreviousCardsForLectureSegment/:lecture_segment_id', (req, res) => {
    const lecture_segment_id = req.params.lecture_segment_id
    console.log("in currentAndPrevCardsForLectureSegment route, lecture segment id is", lecture_segment_id)
    const user_id = req.user.user_id
    console.log("user_id in current and prev is", user_id)
    UserCards.getCurrentAndPreviousCardsForLectureSegment(lecture_segment_id, user_id)
        .then(cards => {
            res.status(200).json(cards);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
})

// ADD CARDS FROM LECTURE SEGMENT TO USER
// CHANGE THIS TO PARAMS
router.post('/addLectureSegmentCards', (req, res) => {
    const user_id = req.body.user_id;
    const lecture_segment_id = req.body.lecture_segment_id;
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