import React from 'react';

const Level1Card = (props) => {
    return(
        <div className = "playCard">
            <div className = "cardImg"> Image</div>
            <div className = "cardText">Text</div>
            <span className = "audioBtn">audio</span>
            <span className = "navBtn">nav</span>
            <br/>
        </div>
    );
}

export default Level1Card;