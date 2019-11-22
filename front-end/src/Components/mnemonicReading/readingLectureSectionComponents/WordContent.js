// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components, functions

// styled components
const WordContentDiv = styled.div`
    font-size:6.5rem;
    padding:100px 0px;
`

class WordContent extends React.Component {
    render() {
        return(
            <WordContentDiv>
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