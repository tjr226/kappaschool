// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components, functions
import SectionContent from './SectionContent';
import QuizComponent from './QuizComponent';
// import { getCardsForStats } from '../../../Actions';

// styled components
const ContentAndQuizDiv = styled.div``

class ContentAndQuiz extends React.Component {
    render() {
        return (
            <ContentAndQuizDiv>
                <SectionContent
                    lecture_section_id={this.props.lecture_section_id}
                    lecture_section_name={this.props.lecture_section_name}
                    card_list={this.props.card_list}
                />
                <QuizComponent
                    lecture_id={this.props.lecture_id}
                    lecture_section_id={this.props.lecture_section_id}
                    lecture_section_name={this.props.lecture_section_name}
                />

            </ContentAndQuizDiv>
        )
    }
}

export default ContentAndQuiz;
// const mapStateToProps = state => {
//     return {
//         cardsForStats: state.cardReducer.cardsForStats
//     }
// }

// export default connect(
//     mapStateToProps,
//     // { getCardsForStats },
//     null,
// )(ContentAndQuiz)