// import libraries
import React from 'react';
import styled from 'styled-components';

// imported components

// styled components
const ReadingPracticeDiv = styled.div``



class ReadingPractice extends React.Component {
    componentDidMount() {
        console.log(this.props.lecture_id)
    }
    render() {
        return (
            <ReadingPracticeDiv>
                <h3>Reading practice placeholder</h3>
                <p>{this.props.lecture_id}</p>
                <p>{this.props.lecture_segment}</p>
            </ReadingPracticeDiv>
        )
    }
}

export default ReadingPractice;