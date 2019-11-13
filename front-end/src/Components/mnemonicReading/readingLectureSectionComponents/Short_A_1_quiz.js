// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components, functions
import { getCurrentPrevCardsLectureSection } from '../../../Actions';

// styled components
const ShortA1QuizDiv = styled.div``

class ShortA1Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lecture_segment_id: 1,
            lecture_id: 1,
            show_quiz: 0,
            card_number: 0,
            card_list: [],
        }
        // this.increaseCardNumberRemembered = this.increaseCardNumberRemembered.bind(this)s
        // this.increaseCardNumberDidNotRemember = this.increaseCardNumberDidNotRemember.bind(this)
    }

    componentDidMount() {
        this.props.getCurrentPrevCardsLectureSection(this.state.lecture_segment_id)
    }
    showQuiz = e => {
        e.preventDefault();
        // this.props.getCardsForLectureSection(this.state.lecture_segment_id);
        this.setState({
            ...this.state,
            show_quiz: 1
        })
    }

    // placeholder - increase card number, didn't remember
    
    // placeholder - increase card number, remembered

    render() {
        return (
        <ShortA1QuizDiv>
            <h3>Short A 1 quiz placeholder</h3>
        </ShortA1QuizDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        card_list: state.cardReducer.cardsForQuiz
    }
}

export default connect(
    mapStateToProps,
    { getCurrentPrevCardsLectureSection },
)(ShortA1Quiz)
