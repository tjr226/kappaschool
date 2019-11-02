import React from 'react';
import { connect } from 'react-redux';

// import { getUserCards } from '../../Actions';

import styled from 'styled-components';

class MemoryGraph extends React.Component {

    render() {
        let unhiddenLectureCards = this.props.userLectureCards.filter(card => card.hidden_boolean === 0)
        let hiddenLectureCards = this.props.userLectureCards.filter(card => card.hidden_boolean === 1)

        return (
            <div>
                <h2>Graph Placeholder</h2>
                <p>PLACEHOLDER wait to improve until quiz sections are working</p>
                <p>Unhidden cards: {unhiddenLectureCards.length}</p>
                <p>Hidden cards: {hiddenLectureCards.length}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userLectureCards: state.cardReducer.userLectureCards,
    };
}

export default connect(
    mapStateToProps,
    null,
)(MemoryGraph)