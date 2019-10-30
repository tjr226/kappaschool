// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components

// styled components
const CardDisplayDiv = styled.div``



class CardDisplay extends React.Component {

    render() {
        return (
            <CardDisplayDiv>
                <p>Question is {this.props.card.card_question}</p>
                <p>Answer is {this.props.card.card_answer}</p>
                <p>Lecture segment is {this.props.card.lecture_segment_id}</p>
                <button>didn't remember</button>
                <button>remembered</button>
            </CardDisplayDiv>
        )
    }
}

export default CardDisplay;