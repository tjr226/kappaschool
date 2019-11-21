// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components, functions
import QuizComponent from '../readingLectureSectionComponents/QuizComponent';
import SectionContent from '../readingLectureSectionComponents/SectionContent';
import LectureComponent from './LectureComponent';
// import { getCardsForStats, getSectionsByLecture } from '../../../Actions';
import ReadingMemoryGraph from '../readingLectureSectionComponents/ReadingMemoryGraph';
import ContentAndQuiz from '../readingLectureSectionComponents/ContentAndQuiz';

// styled components
const ShortALectureDiv = styled.div`
    display:flex;`

const MiddleDiv = styled.div``

class ShortALecture extends React.Component {
    componentDidMount() {
        // this.props.getCardsForStats(1)
        // this.props.getSectionsByLecture(1)
    }

    render() {
        return (

            <LectureComponent lecture_id={1} />
        )
    }
}

export default ShortALecture;
// const mapStateToProps = state => {
//     return {
//         cardsForStats: state.cardReducer.cardsForStats
//     }
// }

// export default connect(
//     mapStateToProps,
//     // { getCardsForStats, getSectionsByLecture },
// )(ShortALecture)