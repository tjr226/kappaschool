// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components
import Flashcard from './Flashcard.js';

// styled components
const LetterSoundDiv = styled.div`
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

class LetterSound extends React.Component {
    state = {
        lecture_id: this.props.lecture.id,
        lecture_segment: '',
        show_quiz: false,
    }

    startQuiz = input => e => {
        e.preventDefault();
        this.setState({ 
            ...this.state,
            lecture_segment: input,
            show_quiz: !this.state.show_quiz
        })
    }

    render() {
        return (
                    <LetterSoundDiv>
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
                        {this.state.show_quiz && <Flashcard lecture_id={this.state.lecture_id} lecture_segment={this.state.lecture_segment} />}
                    </LetterSoundDiv>
        )
    }
}

export default LetterSound;