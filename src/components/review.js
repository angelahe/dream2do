/**
 * Logic for the review level
 * @constructor
 *   @param {Number} cardNumber - Current card number
 *   @param {Boolean} cardSide - Current card side
 *   @param {object} deck - Deck object
 */

import Deck from './deck'

class review {
  constructor(deck) {
    this.cardNumber = 0;
    this.cardSide = true; //Language one is true, language two is false
    this.deck = (deck !== undefined) ? JSON.parse(JSON.stringify(deck)) : new Deck();
  }

  // Called when the next card button is pressed
  handleNextClick = () => {
    if (!this.cardSide) {
        this.cardNumber++;
    }
    this.cardSide = !this.cardSide;

    // console.log("cardside is ", this.cardSide);
    // console.log(this.deck.cardHolder[this.cardNumber].textLanguageOne);
  }

  // Called when the previous card button is pressed
  handlePrevClick = () => {
    if (this.cardSide) {
      if (this.cardNumber === 0) {
        this.cardNumber = this.deck.cardHolder.length - 1;
      } else {
        this.cardNumber--;
      }
    }
    this.cardSide = !this.cardSide;
    // console.log("cardside is ", this.cardSide);
    // console.log(this.deck.cardHolder[this.cardNumber].textLanguageOne);
  }

}

export default review