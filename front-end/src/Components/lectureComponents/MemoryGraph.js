import React from 'react';
import { connect } from 'react-redux';

import { getUserCards } from '../../Actions';

import styled from 'styled-components';

class MemoryGraph extends React.Component {

    
    componentDidMount() {
        this.props.getUserCards();
    };

    render() {
        return (
            <div>
                <h2>Graph Placeholder</h2>
                <p>Total unhidden cards for current user: {this.props.userCardsList.length}</p>
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