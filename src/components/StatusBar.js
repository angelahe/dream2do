/**
 * Component the status bar (Top bar)
 */

import React from 'react';

const StatusBar = (props) => {
    return(
        <div className='statusBar'>
            <button onClick={props.homeScreen}>Home</button>
        </div>
    );
}

export default StatusBar;