// import libraries
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import components, functions
import ReadingHome from './ReadingHome';
import ShortALecture from './readingLectureComponents/ShortALecture';
import ShortELecture from './readingLectureComponents/ShortELecture';
import ShortILecture from './readingLectureComponents/ShortILecture';
import ShortOLecture from './readingLectureComponents/ShortOLecture';
import ShortULecture from './readingLectureComponents/ShortULecture';

// styled components
const ReadingClassPaneDiv = styled.div``

// PageContent is everything but header
const PageContentDiv = styled.div`
    display:flex;
    width:100%;
    `

// Lecture materials and Stats sidebar
const PathContentDiv = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    `

// Router links sidebar
const RouterLinksDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:20%;
    `

class ReadingClassPane extends React.Component {

    render() {
        return (
            <Router>
                <ReadingClassPaneDiv>
                    <h1>Kappa School</h1>
                    <PageContentDiv>
                        <RouterLinksDiv>
                            <Link to="/reading">Home</Link>
                            <Link to="/shortA">Short A</Link>
                            <Link to="/shortE">Short E</Link>
                            <Link to="/shortI">Short I</Link>
                            <Link to="/shortO">Short O</Link>
                            <Link to="/shortU">Short U</Link>
                        </RouterLinksDiv>
                        <PathContentDiv>
                            <Route exact path="/reading" component={ReadingHome} />
                            <Route exact path="/shortA" component={ShortALecture} />
                            <Route exact path="/shortE" component={ShortELecture} />
                            <Route exact path="/shortI" component={ShortILecture} />
                            <Route exact path="/shortO" component={ShortOLecture} />
                            <Route exact path="/shortU" component={ShortULecture} />
                        </PathContentDiv>
                    </PageContentDiv>
                </ReadingClassPaneDiv>

            </Router>
        )
    }
}

export default ReadingClassPane;