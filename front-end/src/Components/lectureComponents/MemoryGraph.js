import React from 'react';
import { connect } from 'react-redux';

import { getUserCards } from '../../Actions';

import styled from 'styled-components';

class MemoryGraph extends React.Component {


    componentDidMount() {

    };

    render() {
        return (
            <div>
                <h2>Graph Placeholder</h2>
                <p>PLACEHOLDER wait to improve until quiz sections are working</p>

     
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userCardsList: state.cardReducer.cardList,
    };
}

export default connect(
    mapStateToProps,
    { getUserCards }
)(MemoryGraph)