/**
 * Holder object for deck variables
 * @constructor
 *   @param {Array} cardHolder - Holds Card objects
 */

import Card from './card';

class Deck {
  constructor() {
    // Map through the data 
    this.cardHolder = Array(10).fill('').map((value, index) => {
      return new Card('https://www.fillmurray.com/350/300', `language1.${index+1}`, `language2.${index+1}`, `audiofile${index+1}`);
    });
  }
}

export default Deck;