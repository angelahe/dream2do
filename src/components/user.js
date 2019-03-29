/**
 * Represents a language manager
 * @constructor
 * @param {string} lang - The label of the language.
 * @param {Array} langArr - The array of the languages.
 */

export default class User {
  constructor(firstName, lastName ) {
    this.user = {
      firstName,
      lastName
    }
  }


  updateUser(changedName, nameType) {
    // console.log(this.user)
    // console.log(changedName, nameType)
    if(nameType === 'firstName'){
       // change first name user object
      this.user.firstName = changedName
      return this.user
     
    } else if (nameType === 'lastName'){
      // change last name user object
      this.user.lastName = changedName
      return this.user

    } else {
      return this.user
    }
  }

  deleteUser() {
    return this.user ={}
  }
}