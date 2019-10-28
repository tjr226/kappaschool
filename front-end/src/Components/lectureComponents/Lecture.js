// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components
import MemoryGraph from './MemoryGraph.js'

// styled components

const PageDiv = styled.div`
    display:flex;
    `
const LecturePane = styled.div`
    width:80%;
    border-style:solid;
    border-width:1px;
    `
const LectureSectionDiv = styled.div``
const CardDiv = styled.div``
const MemoryGraphDiv = styled.div``

// end top section

class Lecture extends React.Component {
    render() {
        return (
            <PageDiv>
                <LecturePane>
                    <h1>Lecture Title Placeholder</h1>
                    <div>
                        <LectureSectionDiv>
                            <h4>Lecture Section</h4>
                            <p>placeholder text</p>
                            <p>placeholder text</p>
                            <p>placeholder text</p>
                            <CardDiv>
                                <h5>card container placeholder</h5>
                            </CardDiv>
                        </LectureSectionDiv>
                        <LectureSectionDiv>
                            <h4>Lecture Section</h4>
                            <p>placeholder text</p>
                            <p>placeholder text</p>
                            <p>placeholder text</p>
                            <CardDiv>
                                <h5>card container placeholder</h5>
                            </CardDiv>
                        </LectureSectionDiv>
                        <LectureSectionDiv>
                            <h4>Lecture Section</h4>
                            <p>placeholder text</p>
                            <p>placeholder text</p>
                            <p>placeholder text</p>
                            <CardDiv>
                                <h5>card container placeholder</h5>
                            </CardDiv>
                        </LectureSectionDiv>
                    </div>
                </LecturePane>
                <MemoryGraph/>
            </PageDiv>
        )
    }
}

export default Lecture;