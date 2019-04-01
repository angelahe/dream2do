/**
 * Logic for the recognize level
 * @constructor
 *   @param {Number} cardNumber - Current card number
 *   @param {Boolean} cardSide - Current card side
 *   @param {object} deck - Deck object
 *   @param {object} log - Logging object
 */

import log from './log'

class recognize {
  constructor(deck) {
    this.cardNumber = 0;
    this.cardSide = true; //Language one is true, language two is false
    this.deck = JSON.parse(JSON.stringify(deck));
    this.log = new log();
  }

  logTestResult(correct){
    this.log.write(
      'Level 2',
      this.deck.cardHolder[this.cardNumber].textLanguageOne,
      this.deck.cardHolder[this.cardNumber].textLanguageTwo,
      correct)
  }

  cardCorrect = () => {

    if (!this.cardSide) {
      if (this.cardNumber === this.deck.cardHolder.length - 1) {
        this.cardNumber = 0;
      } else {
        this.cardNumber++;
      }
    }
    this.cardSide = !this.cardSide;

    console.log(`${this.deck.cardHolder[this.cardNumber].textLanguageOne},${this.deck.cardHolder[this.cardNumber].textLanguageTwo}, Level 2, Correct`);
    this.logTestResult(true);
  }

  cardWrong = () => {
    
    console.log(`${this.deck.cardHolder[this.cardNumber].textLanguageOne},${this.deck.cardHolder[this.cardNumber].textLanguageTwo}, Level 2, Incorrect`);
    this.logTestResult(false);
  }

}

export default recognize;