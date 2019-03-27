/**
 * Represents a language manager
 * @constructor
 * @param {string} lang - The label of the language.
 * @param {Array} langArr - The array of the languages.
 */

export default class lang {
  constructor(lang = 'en') {
    this.lang = lang
    this.langArr = [lang]
  }

  // should add a language
  addLang(langShortcode) {
    return this.langArr.concat(langShortcode)
  }
  // Should remove last language added
  editLang() {
    return true
  }

  // Should take array and clear all languages
  deleteLangs() {
    return true
  }

  // Should return array of languages
  checkLang(arr) {
    return arr
  }
}