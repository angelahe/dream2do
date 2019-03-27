/**
 * Represents a language manager
 * @constructor
 * @param {string} lang - The label of the language.
 * @param {Array} langArr - The array of the languages.
 */

export default class lang {
  constructor(lang = "en") {
    this.lang = lang;
    this.langArr = [lang];
  }

  // should add a language
  addLang(langShortcode) {
    this.langArr.push(langShortcode);
    return this.langArr;
  }
  // Should remove last language added
  editLang() {
    if (this.langArr.length === 2) {
      this.langArr.pop();
      return this.langArr;
    }
  }

  // Should take array and clear all languages
  deleteLangs() {
    return this.langArr = []
  }

  // Should return array of languages
  checkLang() {
    return this.langArr
  }
}
