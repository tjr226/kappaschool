// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components, functions
import QuizComponent from '../readingLectureSectionComponents/QuizComponent';
import SectionContent from '../readingLectureSectionComponents/SectionContent';
import { getCardsForStats } from '../../../Actions';
import ReadingMemoryGraph from '../readingLectureSectionComponents/ReadingMemoryGraph';

// styled components
const ShortALectureDiv = styled.div`
    display:flex;`

const MiddleDiv = styled.div`
    
`

class ShortALecture extends React.Component {
    componentDidMount() {
        this.props.getCardsForStats(1)
    }

    render() {
        return (
            <ShortALectureDiv>
                <MiddleDiv>

                    <h3>Short A Lecture placeholder</h3>
                    {/* NOTE: using cardsForStats to display content, this is probably temporary */}

                    <SectionContent
                        lecture_segment_id={1}
                        card_list={this.props.cardsForStats}
                    />
                    <QuizComponent
                        lecture_id={1}
                        lecture_segment_id={1}
                        lecture_segment_name={"Short A"}
                    />
                </MiddleDiv>
                <ReadingMemoryGraph />
            </ShortALectureDiv>
        )
    }
}

// export default ShortALecture;

const mapStateToProps = state => {
    return {
        cardsForStats: state.cardReducer.cardsForStats
    }
}

export default connect(
    mapStateToProps,
    { getCardsForStats },
)(ShortALecture)