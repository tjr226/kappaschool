// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components

// styled components
const LectureSection2Div = styled.div``

class LectureSection2 extends React.Component {
    state = {
        lecture_section_id: 2
    }
    
    render() {
        return (
            <LectureSection2Div>
                <h4>Lecture Section Two</h4>
                <p>section two placeholder</p>

            </LectureSection2Div
        >
        )
    }
}

export default LectureSection2;