import React from 'react';
import Sound from 'react-sound'

const Level1Card = (props) => {
    const playAudio = (x) => {
        console.log('sound')
        return(
            <Sound
                url={this.props.deck.cardHolder[x].audio}
            />
        );
    }
    return(
        <div className = "playCard">
            <div className = "cardImg"> Image</div>
            <div className = "cardText">Text</div>
            <span className = "audioBtn" onClick={() => playAudio()}>audio</span>
            <span className = "navBtn">nav</span>
            <br/>
        </div>
    );
}

export default Level1Card;