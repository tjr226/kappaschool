// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components

// styled components
const LectureSection3Div = styled.div``

class LectureSection3 extends React.Component {
    state = {
        lecture_section_id: 3
    }
        
    render() {
        return (
            <LectureSection3Div>
                <h4>Lecture Section 3</h4>
                <p>section three placeholder</p>
            </LectureSection3Div>
        )
    }
}

export default LectureSection3;