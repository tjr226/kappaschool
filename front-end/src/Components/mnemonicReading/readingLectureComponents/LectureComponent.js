// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components, functions
import { getCardsForStats, getSectionsByLecture } from '../../../Actions';
import ReadingMemoryGraph from '../readingLectureSectionComponents/ReadingMemoryGraph';
import ContentAndQuiz from '../readingLectureSectionComponents/ContentAndQuiz';

// styled components
const LectureDiv = styled.div``
const MiddleDiv = styled.div``

class LectureComponent extends React.Component {
    componentDidMount() {
        this.props.getCardsForStats(this.props.lecture_id)
        this.props.getSectionsByLecture(this.props.lecture_id)
    }

    render() {
        return (
            <LectureDiv>
                <MiddleDiv>
                {this.props.lectureSections.length > 0
                ?
                <div>
                    {this.props.lectureSections.map(lecture_section => 
                    <ContentAndQuiz
                        key={lecture_section.id}
                        lecture_id={lecture_section.lecture_id}
                        lecture_section_id={lecture_section.id}
                        lecture_section_name={lecture_section.lecture_segment_name}
                        card_list={this.props.cardsForStats}
                    />
                    )}
                </div>
                :
                <div></div>
                }
                </MiddleDiv>
                <ReadingMemoryGraph />
            </LectureDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        cardsForStats: state.cardReducer.cardsForStats,
        lectureSections: state.lectureReducer.lectureSections
    }
}

export default connect(
    mapStateToProps,
    { getCardsForStats, getSectionsByLecture },
)(LectureComponent)