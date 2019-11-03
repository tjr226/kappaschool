// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getCardsForQuiz } from '../../Actions';

// imported components
import CardDisplay from './cardDisplay';

// styled components
const LectureSection1Div = styled.div``
const QuizDiv = styled.div``

class LectureSection1 extends React.Component {
    state = {
        lecture_segment_id: 1,
        lecture_id: 1,
        show_quiz: 0,
    }

    showQuiz = e => {
        e.preventDefault()
        this.props.getCardsForQuiz(this.state.lecture_id)
        this.setState({
            ...this.state,
            show_quiz: 1
        })
    }

    render() {
        return (
            <LectureSection1Div>
                <h4>Lecture Section One</h4>
                <p>should be 5 cards total</p>
                <QuizDiv>
                    {this.state.show_quiz
                        ?
                        this.props.cardsForQuiz
                            .filter(card => card.lecture_segment_id <= this.state.lecture_segment_id)
                            .filter(card => card.hidden_boolean === 0)
                            .map(card => <CardDisplay key={card.user_card_id} card={card} />
                        )
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
