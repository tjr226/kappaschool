// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components
import Flashcard from './Flashcard.js';
import ReadingCardDisplay from './ReadingCardDisplay';
import { getCardsForQuiz } from '../../Actions';

// styled components
const PhonemeBoxDiv = styled.div`
    padding-left:10px;
    border-style: solid;
    border-width: 5px;
    border-color: #007bff;
    color: #007bff;
    border-radius: 10px;
    width:70%;
    padding: 20px;
    margin:20px 10px;
    `

const RouterButtonDiv = styled.div`
    border-style:solid;
    border-width:5px;
    border-color: black;
    border-radius:5px;
    `

const HeaderText = styled.h1`
    font-size:3rem;
`

const TopRowDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`

const FakeButtonDiv = styled.div``
const PracticeButtonDiv = styled.div``

class PhonemeBox extends React.Component {
    state = {
        lecture_id: this.props.lecture.id,
        lecture_segment: '',
        show_quiz: false,
        card_number: 0,
    }

    startQuiz = input => e => {
        e.preventDefault();        
        this.setState({
            ...this.state,
            lecture_segment: input,
            show_quiz: !this.state.show_quiz
        })
        this.props.getCardsForQuiz(this.state.lecture_id)

    }

    render() {
        // const cardsList = this.props.cardsForQuiz
            // .filter(card => card.lecture_segment_id == this.state.lecture_segment_id)
        // console.log(cardsList)

        return (
            <PhonemeBoxDiv>
                <TopRowDiv>
                    <HeaderText>{this.props.lecture.lecture_name}</HeaderText>
                    {/* <PracticeButtonDiv onClick={this.showQuiz}>
                                <button className="btn-lg btn-outline-primary">Practice</button>
                            </PracticeButtonDiv> */}
                </TopRowDiv>

                <FakeButtonDiv>
                    <button onClick={this.startQuiz(1)} className="btn-lg btn-outline-primary">1</button>
                    <button onClick={this.startQuiz(2)} className="btn-lg btn-outline-primary">2</button>
                    <button onClick={this.startQuiz(3)} className="btn-lg btn-outline-primary">3</button>
                    <button onClick={this.startQuiz(4)} className="btn-lg btn-outline-primary">4</button>
                    <button onClick={this.startQuiz(5)} className="btn-lg btn-outline-primary">5</button>
                </FakeButtonDiv>
                {/* {this.state.show_quiz && <Flashcard lecture_id={this.state.lecture_id} lecture_segment={this.state.lecture_segment} />} */}
                {this.state.show_quiz
                    ?
                    <div>

                        {this.state.card_number < this.props.cardsForQuiz.length 
                        ?
                        <ReadingCardDisplay key={this.state.card_number} card={this.props.cardsForQuiz[this.state.card_number]} />
                        :
                        <p>Review Complete</p>
                        }
                    </div>
                    :
                    <div>Quiz not started</div>
                }

            </PhonemeBoxDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        cardsForQuiz: state.cardReducer.cardsForQuiz,
    }
}

export default connect(
    mapStateToProps,
    { getCardsForQuiz },
    // null,
)(PhonemeBox)