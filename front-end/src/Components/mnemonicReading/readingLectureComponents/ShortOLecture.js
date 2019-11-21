// imported libraries
import React from 'react';

// imported components, functions
import LectureComponent from './LectureComponent';

// styled components

class ShortOLecture extends React.Component {

    render() {
        return (
            <LectureComponent lecture_id={4} />
        )
    }
}

export default ShortOLecture;