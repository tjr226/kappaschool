// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getCardsForQuiz } from '../../Actions';

// imported components
import CardDisplay from './cardDisplay';

// styled components
const QuizComponentDiv = styled.div``


class QuizComponent extends React.Component {
    state = {
        card_number: 0,
        
    }

    // cardsList = Object.values(this.props.cardsList)

    render() {
        const cardsList = Object.values(this.props.cardsList)
        // console.log(cardsList)
        // console.log(Array.isArray(cardsList))
        // console.log(cardsList[0])
        return (
            <QuizComponentDiv>
                <p>QuizComponent is displaying</p>
                {/* <p>{Array.isArray(cardsList)}</p> */}
                <CardDisplay card={cardsList[0]} />
            </QuizComponentDiv>
        )
    }
}

export default QuizComponent;