/**
 * Component for review
 * @constructor
 * @param {Object} review - review object
 * @param {Number} currentCard - Current card number
 */

import React from 'react';
import review from './review';
import { Icon } from 'antd';
import Sound from 'react-sound';

class Level1Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      review: new review(this.props.currentDeck),
      currentCard: 0,
      playStatus:Sound.status.STOPPED,
      audioIcon:'sound',
    }
    console.log(this.soundManager)
  }

  // set current card and card side to the initial values
  continueclick = () => {
    let newReview = this.state.review;
    newReview.cardNumber = 0;
    newReview.cardSide = true;
    this.setState({
      review: newReview,
      currentCard: this.state.review.cardNumber,
    })
  }

  playAudio = () => {
    this.setState({
      playStatus:Sound.status.PLAYING,
      audioIcon:'loading',
    })
  }

  finishedPlaying = () => {
    this.setState({
      playStatus:Sound.status.STOPPED,
      audioIcon:'sound',
    })
  }

  render() {
    //console.log('Level1Card: this.state.review', this.state.review)

    // If the current card is after the last, show the finished screen
    if (this.state.currentCard === this.state.review.deck.cardHolder.length) {
      return (
        <div>
          <h1>You Finished</h1>
          <button onClick={() => this.props.clearLevel()}>Go Back</button>
          <button onClick={this.continueclick}>Continue</button>
        </div>
      );
    } else {
      return (
        <div className="playCard">
          <div className="cardImg" style={{backgroundImage:`url(${this.state.review.deck.cardHolder[this.state.currentCard].image})`}} />
          <div
            className="cardText">{(this.state.review.cardSide) ? this.state.review.deck.cardHolder[this.state.currentCard].textLanguageTwo
              : this.state.review.deck.cardHolder[this.state.currentCard].textLanguageOne}</div>
          <div className="card-btns">
            { // Hide the previous button if on the first side of the first card
              (this.state.currentCard === 0 && this.state.review.cardSide === true) ?
                null :
                <Icon style={{ fontSize: '32px' }} onClick={() => {
                  this.state.review.handlePrevClick();
                  this.setState({ 
                    currentCard: this.state.review.cardNumber,
                    playStatus:Sound.status.STOPPED, 
                  })
                }} type="step-backward" />
            }
            <Icon style={{ fontSize: '32px' }} onClick={() => this.playAudio()} type={this.state.audioIcon} />
            <Sound
              url={(this.state.review.cardSide)?this.state.review.deck.cardHolder[this.state.currentCard].audioLanguageTwo:this.state.review.deck.cardHolder[this.state.currentCard].audioLanguageOne}
              playStatus={this.state.playStatus}
              onFinishedPlaying={this.finishedPlaying}
            />

            <Icon style={{ fontSize: '32px' }} onClick={() => {
              this.state.review.handleNextClick();
              this.setState({ 
                currentCard: this.state.review.cardNumber,
                playStatus:Sound.status.STOPPED,
              })
            }} type="step-forward" />

          </div>
        </div>
      );
    }
  }
};

export default Level1Card;
