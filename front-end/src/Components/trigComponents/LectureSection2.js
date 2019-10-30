// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components
import CardDisplay from './cardDisplay';


// styled components
const LectureSection2Div = styled.div``

class LectureSection2 extends React.Component {
    state = {
        lecture_segment_id: 2
    }

    render() {
        return (
            <LectureSection2Div>
                <h4>Lecture Section Two</h4>
                <p>should be 10 cards total</p>
                {this.props.userLectureCards
                    .filter(card => card.lecture_segment_id <= this.state.lecture_segment_id)
                    .map(card => <CardDisplay key={card.user_card_id} card={card} />
                )}
            </LectureSection2Div>
        )
    }
}


const mapStateToProps = state => {
    return {
        userLectureCards: state.cardReducer.userLectureCards,
    };
};

export default connect(
    mapStateToProps,
    null,
)(LectureSection2)