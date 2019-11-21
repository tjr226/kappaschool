// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components, functions
import QuizComponent from '../readingLectureSectionComponents/QuizComponent';
import SectionContent from '../readingLectureSectionComponents/SectionContent';
import { getCardsForStats } from '../../../Actions';
import ReadingMemoryGraph from '../readingLectureSectionComponents/ReadingMemoryGraph';


// 
const LectureDiv = styled.div``
const MiddleDiv = styled.div``

class LectureComponent extends React.Component {
    componentDidMount() {
        this.props.getCardsForStats(this.props.lecture_id)
    }

    render() {
        return (
            <LectureDiv>
                <MiddleDiv>
                    
                </MiddleDiv>
                <ReadingMemoryGraph />
            </LectureDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        cardsForStats: state.cardReducer.cardsForStats
    }
}

export default connect(
    mapStateToProps,
    { getCardsForStats },
)(LectureComponent)