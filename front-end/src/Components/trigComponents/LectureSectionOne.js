// USING this file to copy the CodePen flashcard example

// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getCardsForQuiz } from '../../Actions';

// imported components
import CardDisplay from './cardDisplay';
// import QuizComponent from './QuizComponent';

// styled components
const LectureSection1Div = styled.div``
const QuizDiv = styled.div``


class LectureSection1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lecture_segment_id: 1,
            lecture_id: 1,
            show_quiz: 0,
            card_number: 0,
        }
        this.increaseCardNumber = this.increaseCardNumber.bind(this)
    }

    showQuiz = async e => {
        e.preventDefault()
        // console.log(this.props.userLectureCards)
        this.props.getCardsForQuiz(this.state.lecture_id)
        this.setState({
            ...this.state,
            show_quiz: 1
        })
    }

    increaseCardNumber() {
        this.setState({
            ...this.state,
            card_number: this.state.card_number + 1
        })
    }

    // generateCards() {
    //     const cardsList = this.props.cardsForQuiz
    //         .filter(card => card.lecture_segment_id <= this.state.lecture_segment_id)
    //         .filter(card => card.hidden_boolean === 0)
    //     // const cardsList = cards.map(card => <CardDisplay key={card.user_card_id} card={card} />)
    //     // console.log(cardsList[1])
    //     return cardsList
    // }


    render() {
        const cardsList = this.props.cardsForQuiz
            .filter(card => card.lecture_segment_id <= this.state.lecture_segment_id)
            .filter(card => card.hidden_boolean === 0)


        console.log("cardsList is", cardsList)
        return (
            <LectureSection1Div>
                <h4>Lecture Section One (LectureSectionOne.js, attempting to do the GenerateCards thing)</h4>
                <p>should be 5 cards total</p>
                <QuizDiv>

                    {this.state.show_quiz
                        ?
                        <div>
                            {/* <p>showing quiz</p> */}
                            {/* <QuizComponent cardsList={cardsList} /> */}
                            <CardDisplay card={cardsList[this.state.card_number]} />

                            <button onClick={this.increaseCardNumber} >Didn't remember</button>
                            <button onClick={this.increaseCardNumber}>Remembered</button>


                        </div>
                        :
                        <h2 onClick={this.showQuiz}>Click here to start quiz</h2>
                    }
                </QuizDiv>
            </LectureSection1Div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userLectureCards: state.cardReducer.userLectureCards,
        cardsForQuiz: state.cardReducer.cardsForQuiz,
    };
};

export default connect(
    mapStateToProps,
    { getCardsForQuiz },
)(LectureSection1)
