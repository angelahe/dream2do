/**
 * Component for recognize
 * @constructor
 * @param {Object} recognize - recognize object
 * @param {Number} currentCard - Current card number
 */

import React from 'react';
import recognize from './recognize';

class Level2Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recognize: new recognize(this.props.currentDeck),
      currentCard: 0,
    }
  }

  render() {
    if (this.state.recognize.deck.cardHolder.length === 0){
      return(
        <div>
          <h1>You Finished</h1>
          <button onClick={() => this.props.clearLevel()}>Go Back</button>
        </div>
      );
    } else {
      return (
        <div className="playCard">
          <div className="cardImg"> Image</div>
          <div
            className="cardText">{(this.state.recognize.cardSide) ? this.state.recognize.deck.cardHolder[this.state.currentCard].textLanguageTwo
            : this.state.recognize.deck.cardHolder[this.state.currentCard].textLanguageOne}</div>
          <div className="card-btns">
            {/* <div className="audioBtn" onClick={() => this.state.recognize.playAudio()}>audio
            </div> */}
            <div onClick={() => {
                this.state.recognize.cardWrong();
                this.setState({currentCard: this.state.recognize.cardNumber})
              }} className="navBtn">Wrong
            </div>
            <div onClick={() => {
              this.state.recognize.cardCorrect();
              this.setState({currentCard: this.state.recognize.cardNumber})
            }} className="navBtn">Correct
            </div>
          </div>
        </div>
      );
    }
  }

}

export default Level2Card