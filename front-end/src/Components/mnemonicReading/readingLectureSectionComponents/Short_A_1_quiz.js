// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components, functions
import { getCurrentPrevCardsLectureSection } from '../../../Actions';
import CardDisplay from '../cardDisplay';

// styled components
const ShortA1QuizDiv = styled.div``

const QuizDiv = styled.div``
const QuizShowingDiv = styled.div``

class ShortA1Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lecture_segment_id: 1,
            lecture_id: 1,
            show_quiz: 0,
            card_number: 0,
            card_list: [],
        }
        // this.increaseCardNumberRemembered = this.increaseCardNumberRemembered.bind(this)s
        // this.increaseCardNumberDidNotRemember = this.increaseCardNumberDidNotRemember.bind(this)
    }

    // componentDidMount() {
    //     }
    showQuiz = e => {
        e.preventDefault();
        // this.props.getCardsForLectureSection(this.state.lecture_segment_id);
        this.props.getCurrentPrevCardsLectureSection(this.state.lecture_segment_id)
        this.setState({
            ...this.state,
            show_quiz: 1
        })
    }

    // placeholder - increase card number, didn't remember
    
    // placeholder - increase card number, remembered

    render() {
        const cardsList = this.props.card_list
        console.log(cardsList)

        return (
        <ShortA1QuizDiv>
            <h3>Short A 1 Quiz</h3>
            <QuizDiv>
                {this.state.show_quiz
                ?
                <QuizShowingDiv>
                    <p>Quiz is showing</p>
                    <CardDisplay key={this.state.card_number} card={cardsList[this.state.card_number]} />
                </QuizShowingDiv>
                :
                <h5 onClick={this.showQuiz}>Click here to start quiz</h5>
                }

            </QuizDiv>
        </ShortA1QuizDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        card_list: state.cardReducer.cardsForQuiz
    }
}

export default connect(
    mapStateToProps,
    { getCurrentPrevCardsLectureSection },
)(ShortA1Quiz)
