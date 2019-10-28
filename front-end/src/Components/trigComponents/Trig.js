// imported libraries
import React from 'react';
import styled from 'styled-components';
import MemoryGraph from '../lectureComponents/MemoryGraph';
import LecturePane from './LecturePane'

// imported components


// styled components
const TrigDiv = styled.div`
    display:flex;
    `

// end top section

class Trig extends React.Component {
    render() {
        return (
            <TrigDiv>
                <LecturePane />
                <MemoryGraph />
            </TrigDiv>
        )
    }
}

export default Trig;