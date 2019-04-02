/**
 * Holder object for deck variables
 * @constructor
 *   @param {Array} cardHolder - Holds Card objects
 */

import Card from './card';
import Decks from '../data/second';

console.log("Decks is", Decks);
class Deck {
  constructor(deckNumber = 0, languageOne = 'en', languageTwo = 'fr') {
    // Map through the data
    //assuming for now that all I want is english and spanish as L1 and L2
    //to do: bring in L1 and L2 as variables and fill data accordingly
    //to do: bring in support for audio of L1 as well
    this.cardHolder = Decks[deckNumber].deck.cards.map((value, index) => {
      return new Card(value.img, value[languageOne].word, value[languageTwo].word, value[languageTwo].audio);
    });
//    this.cardHolder = Array(10).fill('').map((value, index) => {
//      return new Card('https://www.fillmurray.com/350/300', `language1.${index+1}`, `language2.${index+1}`, `audiofile${index+1}`);
//    });
  }
}

export default Deck;