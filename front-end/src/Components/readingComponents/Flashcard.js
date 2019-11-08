// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components
import Header from './Header';


// styled components
const FlashcardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    `

const FlashcardText = styled.h1`
    font-size: 8rem;
    `

const ButtonContainer = styled.div`

    
    display: flex;
`

const Button = styled.button`
    font-size: 6rem;
    color:white;
    width: 300px;
    margin: 50px 0px 20px 20px;
    background-color:grey;
`

const ClockButton = styled.button`
    font-size: 6rem;
    color:white;
    width: 300px;
    margin: 50px 0px 20px 20px;
    background-color:#7703fc;
    border-radius:50px;
`

const CheckButton = styled.button`
    font-size: 6rem;
    color:white;
    width: 300px;
    margin: 50px 0px 20px 20px;
    background-color:#2feb05;
    border-radius:50px;
`



class Flashcard extends React.Component {
    render() {
        return (
            <FlashcardDiv>
                <FlashcardText>map</FlashcardText>
                <div />
                <ButtonContainer>
                    <ClockButton>◴</ClockButton>
                    <CheckButton>✓</CheckButton>
                </ButtonContainer>
            </FlashcardDiv>
        )
    }
}

export default Flashcard;