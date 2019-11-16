// import libraries
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import components, functions
import ReadingHome from './ReadingHome';
import ShortALecture from './readingLectureComponents/ShortALecture';
import ShortELecture from './readingLectureComponents/ShortELecture';

// styled components
const ReadingClassPaneDiv = styled.div``

// PageContent is everything but header
const PageContentDiv = styled.div`
    display:flex;
    `

const RouterLinksDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:20%;
    `



const PathContentDiv = styled.div``

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
                        </RouterLinksDiv>
                        <PathContentDiv>
                            <Route exact path="/reading" component={ReadingHome} />
                            <Route exact path="/shortA" component={ShortALecture} />
                            <Route exact path="/shortE" component={ShortELecture} />
                        </PathContentDiv>
                    </PageContentDiv>
                </ReadingClassPaneDiv>

            </Router>
        )
    }
}

export default ReadingClassPane;