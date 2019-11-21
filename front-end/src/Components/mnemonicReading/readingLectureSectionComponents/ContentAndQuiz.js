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
        // console.log("content and quiz props", this.props)
        // if (!this.props.lecture_section_id) {
        //     return (<div></div>)
        // }
        return (
            <ContentAndQuizDiv>
                <SectionContent
                    lecture_section_id={this.props.lecture_section_id}
                    card_list={this.props.card_list}
                    lecture_section_name={this.props.lecture_section_name}
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