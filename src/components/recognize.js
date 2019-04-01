/**
 * Logic for the recognize level
 * @constructor
 *   @param {Number} cardNumber - Current card number
 *   @param {Boolean} cardSide - Current card side
 *   @param {object} deck - Deck object
 *   @param {object} log - Logging object
 */

import log from './log'
import Deck from './deck'

class recognize {
  constructor(deck) {
    this.cardNumber = 0;
    this.cardSide = true; //Language one is true, language two is false
    this.deck = (deck !== undefined) ? JSON.parse(JSON.stringify(deck)) : new Deck();
    this.log = new log();
  }

  logTestResult = (correct) => {
    this.log.write(
      'Level 2',
      this.deck.cardHolder[this.cardNumber].textLanguageOne,
      this.deck.cardHolder[this.cardNumber].textLanguageTwo,
      correct)
  }

  goNextCard = () => {
    if (!this.cardSide) {
      // console.log(`Current card: ${this.cardNumber}, Deck length: ${this.deck.cardHolder.length}`)
      if (this.cardNumber >= this.deck.cardHolder.length - 1) {
        // console.log('loop')
        this.cardNumber = 0;
      } else {
        this.cardNumber++;
      }
    }
    this.cardSide = !this.cardSide;
  }

  nextSide = () => {
    this.cardSide = !this.cardSide;
  }

  cardCorrect = () => {

    //Log stuff
    // console.log(`${this.deck.cardHolder[this.cardNumber].textLanguageOne},${this.deck.cardHolder[this.cardNumber].textLanguageTwo}, Level 2, Correct`);
    this.logTestResult(true);

    //Remove current card
    this.deck.cardHolder.splice(this.cardNumber,1);

    //Go to next card
    this.goNextCard();
  }

  cardWrong = () => {

    //Log stuff
    // console.log(`${this.deck.cardHolder[this.cardNumber].textLanguageOne},${this.deck.cardHolder[this.cardNumber].textLanguageTwo}, Level 2, Incorrect`);
    this.logTestResult(false);

    //Go to next card
    this.goNextCard();
  }

}

export default recognize;