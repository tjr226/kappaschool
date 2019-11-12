import React from 'react';
import styled from 'styled-components';

const ReadingCardDisplayDiv = styled.div``

class ReadingCardDisplay extends React.Component {
    render() {
        if (!this.props.card) {
            return <div />
        }
        return (
            <ReadingCardDisplayDiv>
                <p>card display div></p>
                <p>Word is {this.props.card.card_question}</p>
            </ReadingCardDisplayDiv>
        )
    }
}

export default ReadingCardDisplay;