/**
 * Holder object for card variables
 * @constructor
 *   @param {String} image - path for image file
 *   @param {String} textLanguageOne - Language one string
 *   @param {String} textLanguageTwo - Language two string
 *   @param {String} audio - path for audio file
 */

class Card {
  constructor(image, textLanguageOne, textLanguageTwo, audioL1, audioL2) {
    this.image = image;
    this.textLanguageOne = textLanguageOne;
    this.textLanguageTwo = textLanguageTwo;
    this.audioLanguageOne = audioL1;
    this.audioLanguageTwo = audioL2;
  }
}

export default Card;