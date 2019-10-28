// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components
import LectureSection1 from './LectureSection1';
import LectureSection2 from './LectureSection2';
import LectureSection3 from './LectureSection3';

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
                <h1>Trig Lecture placeholder</h1>
                <LectureSection1 />
                <LectureSection2 />
                <LectureSection3 />
            </LecturePaneDiv>
        )
    }
}

export default LecturePane;