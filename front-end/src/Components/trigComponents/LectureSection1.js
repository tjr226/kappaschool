// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components
import CardDisplay from './cardDisplay';

// styled components
const LectureSection1Div = styled.div``

class LectureSection1 extends React.Component {
    state = {
        lecture_section_id: 1
    }

    render() {
        return (
            <LectureSection1Div>
                <h4>Lecture Section One</h4>
                <p>waiting for all LectureCards on state tree</p>
            </LectureSection1Div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         fetchedCardList: state.cardReducer.cardList,
//     };
// };

// export default connect(
//     mapStateToProps,
//     { getCurrentAndPreviousCardsForLectureSegment }
// )(LectureSection1)

export default LectureSection1