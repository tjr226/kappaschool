// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components
import CardDisplay from './cardDisplay';
import CardQuiz from './cardQuiz';

// styled components
const LectureSection1Div = styled.div``

class LectureSection1 extends React.Component {
    state = {
        lecture_segment_id: 1
    }

    render() {
        return (
            <LectureSection1Div>
                <h4>Lecture Section One</h4>
                <p>should be 5 cards total</p>
                {this.props.userLectureCards
                    .filter(card => card.lecture_segment_id <= this.state.lecture_segment_id)
                    .map(card => <CardDisplay key={card.user_card_id} card={card} />
                )}
                {/* <CardQuiz cardList={this.props.userLectureCards} /> */}
                {/* {this.props.userLectureCards
                    .map(card => <CardQuiz key={card.user_card_id} card={card} /> )} */}
            </LectureSection1Div>
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
)(LectureSection1)
