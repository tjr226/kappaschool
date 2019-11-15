import React from 'react';
import styled from 'styled-components';

import ShortA1Content from './Short_A_1_content'
import QuizComponent from './QuizComponent';

const ShortASection1Div = styled.div``

class ShortASection1 extends React.Component {
    render() {
        return(
            <ShortASection1Div>
                <ShortA1Content />
                <QuizComponent 
                    lecture_id={1}
                    lecture_segment_id={1}
                    lecture_segment_name={"Short A"}
                />
            </ShortASection1Div>
        )
    }
}

export default ShortASection1;