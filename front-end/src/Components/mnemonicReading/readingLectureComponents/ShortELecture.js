// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components, functions
import QuizComponent from '../readingLectureSectionComponents/QuizComponent';
import SectionContent from '../readingLectureSectionComponents/SectionContent';
import ReadingMemoryGraph from '../readingLectureSectionComponents/ReadingMemoryGraph';
import { getCardsForStats } from '../../../Actions';


// styled components
const ShortELectureDiv = styled.div`
    display:flex;`

const MiddleDiv = styled.div``


class ShortELecture extends React.Component {
    componentDidMount() {
        this.props.getCardsForStats(2)
    }

    render() {
        return (
            <ShortELectureDiv>
                <MiddleDiv>
                    <h3>Short E Lecture placeholder</h3>
                    <SectionContent
                        lecture_section_id={6}
                        card_list={this.props.cardsForStats}
                    />
                    <QuizComponent
                        lecture_id={2}
                        lecture_section_id={6}
                        lecture_section_name={"Short E"}
                    />
                </MiddleDiv>
                <ReadingMemoryGraph />
            </ShortELectureDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        cardsForStats: state.cardReducer.cardsForStats
    }
};

export default connect(
    mapStateToProps,
    { getCardsForStats },
)(ShortELecture);