// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components
import Header from './Header';
import LetterSound from './LetterSound';

// styled components
const ReadingHomeDiv = styled.div``
const HeaderText = styled.h1`
    padding: 10px 10px;
    font-size:5rem;
`

class ReadingHome extends React.Component {

    render() {
        return (
            <ReadingHomeDiv>
                <Header />
                <HeaderText>Let's learn how to read!</HeaderText>
                <LetterSound />
            </ReadingHomeDiv>
        )
    }
}

export default ReadingHome;