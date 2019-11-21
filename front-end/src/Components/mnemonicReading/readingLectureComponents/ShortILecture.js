// imported libraries
import React from 'react';

// imported components, functions
import LectureComponent from './LectureComponent';

// styled components

class ShortILecture extends React.Component {

    render() {
        return (
            <LectureComponent lecture_id={3} />
        )
    }
}

export default ShortILecture;