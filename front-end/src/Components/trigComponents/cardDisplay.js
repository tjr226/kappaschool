// imported libraries
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { hideUserLectureCard } from '../../Actions/cardActions';

// imported components

// styled components
const CardDisplayDiv = styled.div``

class CardDisplay extends React.Component {
    
    hideUserLectureCard = e => {
        e.preventDefault();
        this.props.hideUserLectureCard(this.props.card.user_card_id)
    }

    render() {
        return (
            <CardDisplayDiv>
                <p>Question is {this.props.card.card_question}</p>
                <p>Answer is {this.props.card.card_answer}</p>
                <p>Lecture segment is {this.props.card.lecture_segment_id}</p>
                <p>currently using cardDisplay.js</p>
                <button>didn't remember</button>
                <button onClick={this.hideUserLectureCard}>remembered</button>
            </CardDisplayDiv>
        )
    }
}

export default connect(null, { hideUserLectureCard })(CardDisplay);