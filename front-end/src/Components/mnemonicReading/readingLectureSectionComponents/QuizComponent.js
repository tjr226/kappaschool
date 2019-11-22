// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import moment from 'moment';

// imported components, functions
import { getCardsForQuizzes, increaseCardTime, decreaseCardTime } from '../../../Actions';
import CardDisplay from '../cardDisplay';

const QuizComponentDiv = styled.div`
    font-size:6.5rem;
    padding:150px 0px;
`
const QuizShowingDiv = styled.div``
const NotRememberedButton = styled.button`
    font-size:6rem;
    width:300px;
    background-color: purple;
    `

const RememberedButton = styled.button`
    font-size:6rem
    width:300px;
    margin-left:50px;
    background-color: green;
    `


class QuizComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_quiz: 0,
            card_number: 0,
            cardsForQuiz: [],
        }
        this.increaseCardNumberRemembered = this.increaseCardNumberRemembered.bind(this)
        this.increaseCardNusmberDidNotRemember = this.increaseCardNumberDidNotRemember.bind(this)
    }

    showQuiz = e => {
        e.preventDefault();
        this.props.getCardsForQuizzes(this.props.lecture_id)
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
            .filter(card => card.lecture_section_id === this.props.lecture_section_id)
            .filter(card => card.next_date_to_review_unix_timestamp < moment().format('x'))

        return (
            <QuizComponentDiv>
                <h3>{this.props.lecture_section_name} Quiz</h3>
                <div>
                    {this.state.show_quiz
                        ?
                        <QuizShowingDiv>
                            {this.state.card_number < cardsList.length
                                ?
                                <div>
                                    <CardDisplay key={this.state.card_number} card={cardsList[this.state.card_number]} />
                                    <NotRememberedButton
                                        className="btn btn-secondary"
                                        onClick={this.increaseCardNumberDidNotRemember(cardsList[this.state.card_number].user_reading_card_id)}>
                                        ◴
                                    </NotRememberedButton>
                                    <RememberedButton
                                        className="btn btn-secondary"
                                        onClick={this.increaseCardNumberRemembered(cardsList[this.state.card_number].user_reading_card_id)}>
                                        ✓
                                        </RememberedButton>
                                </div>
                                :
                                <div>
                                    <p>You just practiced reading {cardsList.length} words!</p>
                                    <p>Great job!</p>
                                </div>
                            }
                        </QuizShowingDiv>
                        :
                        <h5 onClick={this.showQuiz}>Click here to start quiz</h5>
                    }

                </div>
            </QuizComponentDiv>
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
)(QuizComponent)


