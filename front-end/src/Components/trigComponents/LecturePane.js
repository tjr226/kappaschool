// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUserLectureCards } from '../../Actions';

// imported components
import LectureSection1 from './LectureSection1';
import LectureSectionOne from './LectureSectionOne';

// styled components
const LecturePaneDiv = styled.div`
    width:80%;
    border-style:solid;
    border-width:1px;
    `

class LecturePane extends React.Component {
    state = {
        lecture_id: 1
    }

    componentDidMount() {
        this.props.getUserLectureCards(this.state.lecture_id)
    }


    render() {
        return (
            <LecturePaneDiv>
                <h1>Trig Lecture placeholder</h1>
                {/* <LectureSection1 /> */}
                <LectureSectionOne />
            </LecturePaneDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        userLectureCards: state.cardReducer.userLectureCards
    };
};

export default connect(
    mapStateToProps,
    { getUserLectureCards }
)(LecturePane)