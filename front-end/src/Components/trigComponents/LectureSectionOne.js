// USING this file to copy the CodePen flashcard example

// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getCardsForQuiz, hideUserLectureCard } from '../../Actions';

// imported components
import CardDisplay from './cardDisplay';
// import QuizComponent from './QuizComponent';

// styled components
const LectureSection1Div = styled.div``

const LectureSectionHeader = styled.h3`
    padding:20px;
    `

const QuizDiv = styled.div`
    padding:20px;
    `
const TextDiv = styled.div`
    padding:20px;
    `


class LectureSection1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lecture_segment_id: 1,
            lecture_id: 1,
            show_quiz: 0,
            card_number: 0,
        }
        this.increaseCardNumberRemembered = this.increaseCardNumberRemembered.bind(this)
        this.increaseCardNumberDidNotRemember = this.increaseCardNumberDidNotRemember.bind(this)
    }

    showQuiz = e => {
        e.preventDefault()
        // console.log(this.props.userLectureCards)
        this.props.getCardsForQuiz(this.state.lecture_id)
        this.setState({
            ...this.state,
            show_quiz: 1
        })
    }

    increaseCardNumberDidNotRemember() {
        this.setState({
            ...this.state,
            card_number: this.state.card_number + 1
        })
    }

    increaseCardNumberRemembered = user_card_id => e => {
        e.preventDefault()
        this.props.hideUserLectureCard(user_card_id)
        this.setState({
            ...this.state,
            card_number: this.state.card_number + 1
        })
    }

    render() {
        const cardsList = this.props.cardsForQuiz
            .filter(card => card.lecture_segment_id <= this.state.lecture_segment_id)
            .filter(card => card.hidden_boolean === 0)

        return (
            <LectureSection1Div>
                <LectureSectionHeader>Lecture Section One (LectureSectionOne.js, attempting to do the GenerateCards thing)</LectureSectionHeader>
                <TextDiv>
                    <p>Learning ipsum blah blah blah</p>
                    <p>Learning ipsum blah blah blah</p>
                    <p>Learning ipsum blah blah blah</p>
                    <p>Learning ipsum blah blah blah</p>
                    <p>Learning ipsum blah blah blah</p>
                    <p>Learning ipsum blah blah blah</p>
                </TextDiv>
                <QuizDiv>

                    {this.state.show_quiz
                        ?
                        <div>
                            {this.state.card_number < cardsList.length
                                ?
                                <div>
                                    {/* KEY here is used to render new component for each new card number. */}
                                    {/* If there's no KEY, the child component state won't change, which is needed to hide and unhide answers */}
                                    <CardDisplay key={this.state.card_number} card={cardsList[this.state.card_number]} />
                                    <button
                                        className="btn btn-secondary"
                                        onClick={this.increaseCardNumberDidNotRemember}>

                                        Didn't remember</button>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={this.increaseCardNumberRemembered(cardsList[this.state.card_number].user_card_id)}>
                                        Remembered
                                    </button>
                                </div>
                                :
                                <div>
                                    <h5>section review complete</h5>
                                </div>
                            }
                        </div>
                        :
                        <h5 onClick={this.showQuiz}>Click here to start quiz</h5>
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
    { getCardsForQuiz, hideUserLectureCard },
)(LectureSection1)
