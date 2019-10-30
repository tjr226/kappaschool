// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components

// styled components
const CardQuizDiv = styled.div``

console.log("card quiz happening")
// console.log("card quiz props", this.props)
// console.log(this)

class CardQuiz extends React.Component {
    render() {
        return (
            <CardQuizDiv>
                <p>question: {this.props.card.card_question} </p>
                <p>answer: {this.props.card.card_answer}</p>
                <button>didn't remember</button>
                <button>remembered</button>
            </CardQuizDiv>
        )
    }
}

export default CardQuiz