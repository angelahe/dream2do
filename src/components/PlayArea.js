import React from 'react';
import Level1Card from './Level1Card';

const PlayArea = (props) => {
    return(
        <div className = "playArea">
            <Level1Card deck={props.deck}/>
        </div>
    );
}

export default PlayArea;