// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components
import CardDisplay from './cardDisplay';


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
                <p>placeholder for all lecture cards in Redux store</p>
            </LectureSection2Div>
        )
    }
}

export default LectureSection2;