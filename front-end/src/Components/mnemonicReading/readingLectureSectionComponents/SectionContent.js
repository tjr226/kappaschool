// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components, functions
import WordContent from './WordContent';

// styled components
const SectionContentDiv = styled.div``

class SectionContent extends React.Component {
    render() {
        console.log("section content props", this.props)
        const card_list = this.props.card_list
            .filter(card => card.lecture_section_id === this.props.lecture_section_id)
        if (!this.props.lecture_section_id) {
            return (<div></div>)
        }
        return (
            <SectionContentDiv>
                <p>section content passing through</p>
                {card_list.map(card => <WordContent key={card.user_reading_card_id} card={card} />)}
            </SectionContentDiv>
        )
    }
}

export default SectionContent;