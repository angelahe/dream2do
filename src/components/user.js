/**
 * Represents a user manager
 * @constructor
 * @param {Object} user - The object for user settings.
 */

export default class User {
  constructor(firstName, lastName) {
    this.user = {
      firstName,
      lastName
    }
  }


  updateUser(changedName, nameType) {
    // console.log(this.user)
    // console.log(changedName, nameType)
    if (nameType === 'firstName') {
      // change first name user object
      this.user.firstName = changedName
      return this.user

    } else if (nameType === 'lastName') {
      // change last name user object
      this.user.lastName = changedName
      return this.user

    } else {
      return this.user
    }
  }

  deleteUser() {
    return this.user = {}
  }
}