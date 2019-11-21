// imported libraries
import React from 'react';

// imported components, functions
import LectureComponent from './LectureComponent';

// styled components

class ShortULecture extends React.Component {

    render() {
        return (
            <LectureComponent lecture_id={5} />
        )
    }
}

export default ShortULecture;