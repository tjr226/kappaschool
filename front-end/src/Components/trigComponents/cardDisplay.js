// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components

// styled components
const CardDisplayDiv = styled.div``

class CardDisplay extends React.Component {
    render() {
        return (
            <CardDisplayDiv>
                <p>{this.props.question}</p>
                <p>{this.props.answer}</p>
            </CardDisplayDiv>
        )
    }
}

export default CardDisplay;