// imported libraries
import React from 'react';
import styled from 'styled-components';
import ReadingPractice from './ReadingPractice.js';
import LinkButton from '../supportComponents/LinkButton.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

const PracticeButtonDiv = styled.div`
    `

class LetterSound extends React.Component {
    state = {
        lecture_id: this.props.lecture.id,
        // lecture_segment: '',
        lecture_segment: 1,
    }

    // componentDidMount() {
    // console.log("state")
    // console.log(this.state)
    // }

    setLectureSection = input => e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            lecture_segment: input
        })
        // console.log(this.state)
        // console.log(tshis.props)
    }


    render() {
        return (
            <Router>
                <div>
                    <LetterSoundDiv>
                        <Route exact path="/readingPractice"
                            // component={ReadingPractice} 
                            // render={(routeProps) => <ReadingPractice {...routeProps} lecture_id={this.state.lecture_id} lecture_segment={this.state.lecture_segment} />}
                            render={(routeProps) => <ReadingPractice {...routeProps} lecture_id={1} lecture_segment={1} />}
                        />
                        <TopRowDiv>
                            <HeaderText>{this.props.lecture.lecture_name}</HeaderText>
                            <PracticeButtonDiv>
                                <button className="btn-lg btn-outline-primary">Practice</button>
                            </PracticeButtonDiv>
                        </TopRowDiv>
                        {/* <Link to="/readingPractice">Practice</Link> */}

                        <FakeButtonDiv>
                            {/* <LinkButton
                            to="/readingPractice"
                            className="btn-lg btn-outline-primary"
                            lecture_id={this.props.lecture_id}
                            lecture_section_id={this.props.lecture_section_id}
                        >
                            1
                                </LinkButton> */}

                            <div onClick={this.setLectureSection(1)}>
                                <Link to="/readingPractice">1</Link>
                            </div>

                            <br></br>
                            <button className="btn-lg btn-outline-primary">1</button>

                            <button className="btn-lg btn-outline-primary">2</button>
                            <button className="btn-lg btn-outline-primary">3</button>
                            <button className="btn-lg btn-outline-primary">4</button>
                            <button className="btn-lg btn-outline-primary">5</button>
                        </FakeButtonDiv>
                    </LetterSoundDiv>

                </div>
            </Router>
        )
    }
}

export default LetterSound;