// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components

// styled components
const CardDisplayDiv = styled.div``

class CardDisplay extends React.Component {
    render() {
        if (!this.props.card) {
            return <div />
        }
        return (
            <CardDisplayDiv>
                {this.props.card.word}
            </CardDisplayDiv>
        )
    }
}

export default CardDisplay;