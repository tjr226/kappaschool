import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding: 10px 0px;
    background-color:grey;
    `

const HeaderText = styled.h1`
    font-size:8rem;
    color:white;
    padding-left:10px;
`

class Header extends React.Component {

    render() {
        return (
            <HeaderDiv>
                <HeaderText>Kappa School</HeaderText>
            </HeaderDiv>
        )
    }
}

export default Header;