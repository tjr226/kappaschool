// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components, functions
import LectureComponent from './LectureComponent';

// styled components
const ShortADiv = styled.div`
    width:100%;
    `

class ShortALecture extends React.Component {

    render() {
        return (
            <ShortADiv>
                <LectureComponent lecture_id={1} />
            </ShortADiv>
        )
    }
}

export default ShortALecture;