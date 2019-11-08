// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getLecturesByClass } from '../../Actions';

// imported components
import Header from './Header';
import PhonemeBox from './PhonemeBox';
import Flashcard from './Flashcard';

// styled components
const ReadingHomeDiv = styled.div``
const HeaderText = styled.h1`
    padding: 10px 10px;
    font-size:5rem;
`

class ReadingHome extends React.Component {
    state = {
        class_id: 1
    }

    componentDidMount() {
        this.props.getLecturesByClass(this.state.class_id);
    }
    
    render() {
        return (
            <ReadingHomeDiv>
                <Header />
                <HeaderText>Let's learn how to read!</HeaderText>
                {this.props.lectures
                 .map(lecture => <PhonemeBox key={lecture.id} lecture={lecture} /> )}
                {/* <Flashcard /> */}
            </ReadingHomeDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        lectures: state.classReducer.lectures,
    }
}

export default connect(
    mapStateToProps,
    { getLecturesByClass },
)(ReadingHome)