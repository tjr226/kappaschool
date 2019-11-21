// imported libraries
import React from 'react';
import styled from 'styled-components';

// imported components, functions
import SectionContent from './SectionContent';
import QuizComponent from './QuizComponent';

// styled components
const ContentAndQuizDiv = styled.div``

class ContentAndQuiz extends React.Component {
    render() {
        return (
            <ContentAndQuizDiv>
                <SectionContent
                    lecture_segment_id={this.props.lecture_segment_id}
                    card_list={this.props.card_list}
                />
                <QuizComponent
                    lecture_id={this.props.lecture_id}
                    lecture_segment_id={this.props.lecture_segment_id}
                    lecture_segment_name={this.props.lecture_section_name}
                />

            </ContentAndQuizDiv>
        )
    }
}

export default ContentAndQuiz;