import React from 'react';
import review from './review';

class Level1Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      review: new review(),
      currentCard: 0,
    }
  }

  render() {
    if (this.state.currentCard === this.state.review.deck.cardHolder.length){
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
            className="cardText">{(this.state.review.cardSide) ? this.state.review.deck.cardHolder[this.state.currentCard].textLanguageTwo
            : this.state.review.deck.cardHolder[this.state.currentCard].textLanguageOne}</div>
          <div className="card-btns">
            <div className="audioBtn" onClick={() => this.state.review.playAudio()}>audio
            </div>
            {
              (this.state.currentCard === 0 && this.state.review.cardSide === true)?
                null:
                <div onClick={() => {
                    this.state.review.handlePrevClick();
                    this.setState({currentCard: this.state.review.cardNumber})
                  }} className="navBtn">prev
                </div>
            }
            <div onClick={() => {
              this.state.review.handleNextClick();
              this.setState({currentCard: this.state.review.cardNumber})
            }} className="navBtn">next
            </div>
          </div>
        </div>
      );
    }
  }
};

export default Level1Card;
