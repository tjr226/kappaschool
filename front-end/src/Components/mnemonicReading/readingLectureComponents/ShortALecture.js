import React from 'react';
import styled from 'styled-components';

import ShortASection1 from '../readingLectureSectionComponents/Short_A_1';
// import ShortA1Quiz from '../readingLectureSectionComponents/Short_A_1_quiz';s
import ShortASection2 from '../readingLectureSectionComponents/Short_A_2';


const ShortALectureDiv = styled.div``
    
class ShortALecture extends React.Component {
    state = {
        lecture_id: 1
    }

    render() {
        return (
            <ShortALectureDiv>
                <h3>Short A Lecture placeholder</h3>
                <ShortASection1 />
                {/* <ShortA1Quiz /> */}
                <ShortASection2 />
            </ShortALectureDiv>
        )
    }
}

export default ShortALecture;