import React from 'react';
import styled from 'styled-components';

import ShortASection1 from '../readingLectureSectionComponents/Short_A_1';
import ShortASection2 from '../readingLectureSectionComponents/Short_A_2';

const ShortALectureDiv = styled.div``

class ShortALecture extends React.Component {
    render() {
        return (
            <ShortALectureDiv>
                <h3>Short A Lecture placeholder</h3>
                <ShortASection1 />
                <ShortASection2 />
            </ShortALectureDiv>
        )
    }
}

export default ShortALecture;