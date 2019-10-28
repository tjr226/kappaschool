// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components
import LectureSection from './LectureSection.js';

// styled components
const LecturePaneDiv = styled.div`
    width:80%;
    border-style:solid;
    border-width:1px;
    `

class LecturePane extends React.Component {
    render() {
        return (
            <LecturePaneDiv>
                <h1>Lecture Title Placeholder</h1>
                <LectureSection />
                <LectureSection />
                <LectureSection />
            </LecturePaneDiv>
        )
    }
}

export default LecturePane;