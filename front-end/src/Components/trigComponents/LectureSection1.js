// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components
import CardDisplay from './cardDisplay';
import { getCurrentAndPreviousCardsForLectureSegment } from '../../Actions';

// styled components
const LectureSection1Div = styled.div``

class LectureSection1 extends React.Component {
    state = {
        lecture_section_id: 1
    }
    
    componentDidMount() {
        this.props.getCurrentAndPreviousCardsForLectureSegment(this.state.lecture_section_id);
    }

    render() {
        return (
            <LectureSection1Div>
                <h4>Lecture Section One</h4>
                {this.props.fetchedCardList
                    .map(card => <CardDisplay key={card.id} question={card.question} answer={card.answer} /> )}
            </LectureSection1Div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchedCardList: state.cardReducer.cardList,
    };
};

export default connect(
    mapStateToProps,
    { getCurrentAndPreviousCardsForLectureSegment }
)(LectureSection1)