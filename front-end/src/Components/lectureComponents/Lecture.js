// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components
import MemoryGraph from './MemoryGraph.js'
import LecturePane from './LecturePane.js'

// styled components

const PageDiv = styled.div`
    display:flex;
    `

// end top section

class Lecture extends React.Component {
    render() {
        return (
            <PageDiv>
                <LecturePane />
                <MemoryGraph />
            </PageDiv>
        )
    }
}

export default Lecture;