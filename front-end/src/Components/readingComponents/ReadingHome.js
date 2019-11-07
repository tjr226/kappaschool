// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components
import Header from './Header';
import LetterSound from './LetterSound';

// styled components
const ReadingHomeDiv = styled.div``

class ReadingHome extends React.Component {

    render() {
        return (
            <ReadingHomeDiv>
                <Header />
                <h3>Let's learn how to read!</h3>
                <LetterSound />
            </ReadingHomeDiv>
        )
    }
}

export default ReadingHome