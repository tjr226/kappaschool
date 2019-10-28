// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components

// styled components
const LectureSection1Div = styled.div``

class LectureSection1 extends React.Component {
    state = {
        lecture_section_id: 1
    }
    
    render() {
        return (
            <LectureSection1Div>
                <h4>Lecture Section One</h4>
                <p>section one placeholder</p>
            </LectureSection1Div>
        )
    }
}

export default LectureSection1;