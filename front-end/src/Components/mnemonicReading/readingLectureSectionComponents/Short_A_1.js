import React from 'react';
import styled from 'styled-components';

import ShortA1Content from './Short_A_1_content'

const ShortASection1Div = styled.div``

class ShortASection1 extends React.Component {
    render() {
        return(
            <ShortASection1Div>
                <ShortA1Content />
                <p>quiz placeholder</p>
            </ShortASection1Div>
        )
    }
}

export default ShortASection1;