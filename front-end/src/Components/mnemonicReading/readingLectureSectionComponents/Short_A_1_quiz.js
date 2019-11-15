// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import moment from 'moment';

// imported components, functions
import { getCardsForQuizzes, increaseCardTime, decreaseCardTime } from '../../../Actions';
import CardDisplay from '../cardDisplay';

// styled components
const ShortA1QuizDiv = styled.div``

const QuizDiv = styled.div``
const QuizShowingDiv = styled.div``

const NotRememberedButton = styled.button``
const RememberedButton = styled.button``


class ShortA1Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lecture_segment_id: 1,
            lecture_id: 1,
            show_quiz: 0,
            card_number: 0,
            cardsForQuiz: [],
        }
        this.increaseCardNumberRemembered = this.increaseCardNumberRemembered.bind(this)
        this.increaseCardNusmberDidNotRemember = this.increaseCardNumberDidNotRemember.bind(this)
    }

    showQuiz = e => {
        e.preventDefault();
        this.props.getCardsForQuizzes(this.state.lecture_id)
        this.setState({
            ...this.state,
            show_quiz: 1
        })
    }

    increaseCardNumberDidNotRemember = user_card_id => e => {
        e.preventDefault()
        this.props.decreaseCardTime(user_card_id)
        this.setState({
            ...this.state,
            card_number: this.state.card_number + 1
        })
    }

    increaseCardNumberRemembered = user_card_id => e => {
        e.preventDefault()
        this.props.increaseCardTime(user_card_id)
        this.setState({
            ...this.state,
            card_number: this.state.card_number + 1
        })
    }

    render() {
        const cardsList = this.props.cardsForQuiz
            .filter(card => card.lecture_segment_id === this.state.lecture_segment_id)
            .filter(card => card.next_date_to_review_unix_timestamp < moment().format('x'))
        // cardsList.filter(card => card.lecture_segment_id === this.state.lecture_segment_id)
        // .filter(card => card.next_date_to_review_moment_timestamp < moment().format('x'))
        console.log(cardsList)
    
        return (
            <ShortA1QuizDiv>
                <h3>Short A 1 Quiz</h3>
                <QuizDiv>
                    {this.state.show_quiz
                        ?
                        <QuizShowingDiv>
                            {this.state.card_number < cardsList.length
                                ?
                                <div>
                                    <CardDisplay key={this.state.card_number} card={cardsList[this.state.card_number]} />
                                    <NotRememberedButton
                                        className="btn btn-secondary"
                                        onClick={this.increaseCardNumberDidNotRemember(cardsList[this.state.card_number].user_card_id)}>
                                        Didn't remember
                                    </NotRememberedButton>
                                    <RememberedButton
                                        className="btn btn-secondary"
                                        onClick={this.increaseCardNumberRemembered(cardsList[this.state.card_number].user_card_id)}>
                                        Remembered
                                        </RememberedButton>
                                </div>
                                :
                                <h5>section review complete</h5>
                            }
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
        cardsForQuiz: state.cardReducer.cardsForQuizzes
    }
}

export default connect(
    mapStateToProps,
    { getCardsForQuizzes, increaseCardTime, decreaseCardTime },
)(ShortA1Quiz)
