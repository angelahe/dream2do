/**
 * Holder object for card variables
 * @constructor
 *   @param {String} image - path for image file
 *   @param {String} textLanguageOne - Language one string
 *   @param {String} textLanguageTwo - Language two string
 *   @param {String} audio - path for audio file
 */

class Card {
  constructor(image, textLanguageOne, textLanguageTwo, audio) {
    this.image = image;
    this.textLanguageOne = textLanguageOne;
    this.textLanguageTwo = textLanguageTwo;
    this.audio = audio;
  }
}

export default Card;