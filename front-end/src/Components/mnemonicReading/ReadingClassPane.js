// import libraries
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import components, functions
import IntroLecture from './readingLectureComponents/IntroLecture';
import ShortALecture from './readingLectureComponents/ShortALecture';
import ShortELecture from './readingLectureComponents/ShortELecture';

// styled components
const ReadingClassPaneDiv = styled.div``

const RouterLinksDiv = styled.div``

class ReadingClassPane extends React.Component {

    render() {
        return (
            <Router>
                <ReadingClassPaneDiv>
                    <h1>Reading Class Pane Placeholder</h1>
                    <RouterLinksDiv>
                        <Link to="/intro">Intro to Reading</Link>
                        <Link to="/shortA">Short A</Link>
                        <Link to="/shortE">Short E</Link>
                    </RouterLinksDiv>


                <Route exact path="/intro" component={IntroLecture} />
                <Route exact path="/shortA" component={ShortALecture} />
                <Route exact path="/shortE" component={ShortELecture} />
                

                </ReadingClassPaneDiv>
            </Router>
        )
    }
}

export default ReadingClassPane;