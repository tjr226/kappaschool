// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components
import LectureQuizSection from './LectureQuizSection.js';

// styled components
const LectureSectionDiv = styled.div``

class LectureSection extends React.Component {
    render() {
        return (
            <LectureSectionDiv>
                <h4>Lecture Section</h4>
                <p>placeholder text</p>
                <p>placeholder text</p>
                <p>placeholder text</p>
                <LectureQuizSection />
            </LectureSectionDiv>
        )
    }
}

export default LectureSection;