// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components, functions

// styled components
const WordContentDiv = styled.div``

class WordContent extends React.Component {
    render() {
        return(
            <WordContentDiv>
                <p>word content div here</p>
                {this.props.card.word}
                <br />
                {this.props.card.word_spaced_by_sounds}
                <br/>
                {this.props.card.word_sentence_example}
                <br/>
            </WordContentDiv>
        )
    }
}

export default WordContent;