// imported libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// imported components, functions

// styled components
const ReadingMemoryGraphDiv = styled.div`
    display:flex;
    justify-content:flex-end;
    `

class ReadingMemoryGraph extends React.Component {
    
    render() {
        const zeroDayCards = this.props.cardsForStats.filter(card => card.previous_spaced_repetition_days >= 0).length;
        const oneDayCards = this.props.cardsForStats.filter(card => card.previous_spaced_repetition_days >= 1).length;
        const twoDayCards = this.props.cardsForStats.filter(card => card.previous_spaced_repetition_days >= 2).length;
        const fourDayCards = this.props.cardsForStats.filter(card => card.previous_spaced_repetition_days >= 4).length;
        const sevenDayCards = this.props.cardsForStats.filter(card => card.previous_spaced_repetition_days >= 7).length;

        return (
            <ReadingMemoryGraphDiv>
                <div>
                    <h1>{sevenDayCards}</h1>
                    <p>One week</p>
                    <h1>{fourDayCards}</h1>
                    <p>Four days</p>
                    <h1>{twoDayCards}</h1>
                    <p>Two Days</p>
                    <h1>{oneDayCards}</h1>
                    <p>One day</p>
                    <h1>{zeroDayCards}</h1>
                    <p>Cards in lecture</p>
                </div>
            </ReadingMemoryGraphDiv>
        )
    }
}

const mapStateToProps = state => {
    return {
        cardsForStats: state.cardReducer.cardsForStats
    }
}

export default connect(
    mapStateToProps,
    null,
)(ReadingMemoryGraph)