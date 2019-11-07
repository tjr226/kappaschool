// imported libraries
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// imported components

// styled components
const MemoryGraphDiv = styled.div`
    padding-top:20px;
`

const MemoryGraphButton = styled.button`
    width:100%;
    text-align:right;
`



class MemoryGraph extends React.Component {

    render() {
        let unhiddenLectureCardsCount = this.props.userLectureCards.filter(card => card.hidden_boolean === 0).length
        let hiddenLectureCardsCount = this.props.userLectureCards.filter(card => card.hidden_boolean === 1).length
        let totalLectureCardsCount = this.props.userLectureCards.length

        return (
            <MemoryGraphDiv>
                <h2>Progress</h2>
                <MemoryGraphButton className="btn btn-success">One month: <span className="badge badge-light">0</span></MemoryGraphButton>
                <br/>
                <MemoryGraphButton className="btn btn-info">Two weeks: <span className="badge badge-light">0</span></MemoryGraphButton>
                <br/>
                <MemoryGraphButton className="btn btn-primary">Five days: <span className="badge badge-light">0</span></MemoryGraphButton>
                <br/>
                <MemoryGraphButton className="btn btn-warning">Two days: <span className="badge badge-light">{hiddenLectureCardsCount}</span></MemoryGraphButton>
                <br/>
                <MemoryGraphButton className="btn btn-danger">Total Lecture Cards: <span className="badge badge-light">{unhiddenLectureCardsCount}</span></MemoryGraphButton>
            </MemoryGraphDiv>
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