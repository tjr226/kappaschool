// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components
import CardDisplay from './cardDisplay';
import { getCurrentAndPreviousCardsForLectureSegment } from '../../Actions';

// styled components
const LectureSection2Div = styled.div``

class LectureSection2 extends React.Component {
    state = {
        lecture_section_id: 2
    }
            
    componentDidMount() {
        this.props.getCurrentAndPreviousCardsForLectureSegment(this.state.lecture_section_id);
    }

    render() {
        return (
            <LectureSection2Div>
                <h4>Lecture Section Two</h4>
                {this.props.fetchedCardList
                    .map(card => <CardDisplay key={card.id} question={card.question} answer={card.answer} /> )}

            </LectureSection2Div>
        )
    }
}

export default LectureSection2;

const mapStateToProps = state => {
    return {
        
    }
}