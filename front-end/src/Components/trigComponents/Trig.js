// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components


// styled components

const PageDiv = styled.div``
const LectureSectionDiv = styled.div``
const CardDiv = styled.div``

// end top section

class Trig extends React.Component {
    render() {
        return (
            <PageDiv>
                <h1>Trigonometry is a thing</h1>
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
            </PageDiv>
        )
    }
}

export default Trig;