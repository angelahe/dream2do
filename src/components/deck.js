/**
 * Holder object for deck variables
 * @constructor
 *   @param {Array} cardHolder - Holds Card objects
 */

import Card from './card';
import Decks from '../data/second';

// console.log("Decks is", Decks);
class Deck {
  constructor(deckNumber = 1, languageOne = 'en', languageTwo = 'fr') {
    // console.log(`L1: ${languageOne}, L2: ${languageTwo}`)
    // Map through the data
    this.cardHolder = Decks[deckNumber].deck.cards.map((value, index) => {
      return new Card(value.img, value[languageOne].word, value[languageTwo].word, value[languageOne].audio, value[languageTwo].audio);
    });
  }
}

export default Deck;