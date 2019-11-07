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
    padding:10px;
    `
const HeaderDiv = styled.h1`
    padding:20px;
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
                <HeaderDiv>Trig Lecture placeholder</HeaderDiv>
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