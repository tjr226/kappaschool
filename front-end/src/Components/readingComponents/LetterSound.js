// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components

// styled components
const LetterSoundDiv = styled.div`
    padding-left:10px;
    border-style: solid;
    border-width: 5px;
    border-color: #007bff;
    color: #007bff;
    border-radius: 10px;
    width:50%;
    padding: 20px;
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

const PracticeButtonDiv = styled.div`

    `


class LetterSound extends React.Component {
    render() {
        return (
            <div>
                <LetterSoundDiv>
                    <TopRowDiv>
                        <HeaderText>Short A (placeholder)</HeaderText>
                        <PracticeButtonDiv>
                            <button class="btn-lg btn-outline-primary">Practice</button>
                        </PracticeButtonDiv>
                    </TopRowDiv>
                    <FakeButtonDiv>
                        <button class="btn-lg btn-outline-primary">1</button>
                        <button class="btn-lg btn-outline-primary">2</button>
                        <button class="btn-lg btn-outline-primary">3</button>
                        <button class="btn-lg btn-outline-primary">4</button>
                        <button class="btn-lg btn-outline-primary">5</button>
                    </FakeButtonDiv>
                </LetterSoundDiv>
            </div>
        )
    }
}

export default LetterSound;