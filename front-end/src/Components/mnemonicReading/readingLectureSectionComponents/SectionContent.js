// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components, functions
import WordContent from './WordContent';

// styled components
const SectionContentDiv = styled.div``

class SectionContent extends React.Component {
    render() {
        const card_list = this.props.card_list
            .filter(card => card.lecture_segment_id === this.props.lecture_segment_id)
        
        return (
            <SectionContentDiv>
                {card_list.map(card => <WordContent key={card.user_reading_card_id} card={card} />)}
            </SectionContentDiv>
        )
    }
}

export default SectionContent;