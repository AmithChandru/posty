import React, { Component } from 'react';

class NotFound extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='NotFound'>
                <span className='Content'>
                    OOPS! PAGE NOT FOUND
                </span>
                <span className='TitleName'>
                    404
                </span>
                <span className='Content'>
                    WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND 
                </span>
            </div>
        )
    }
}

export default NotFound;