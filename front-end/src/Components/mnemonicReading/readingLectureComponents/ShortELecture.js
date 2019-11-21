// imported libraries
import React from 'react';

// imported components, functions
import LectureComponent from './LectureComponent';

// styled components

class ShortELecture extends React.Component {

    render() {
        return (
            <LectureComponent lecture_id={2} />
        )
    }
}

export default ShortELecture;