/**
 * Represents a user manager
 * @constructor
 * @param {Object} user - The object for user settings.
 */

export default class User {
  constructor(firstName = '', lastName = '', email = '') {
    this.user = {
      firstName,
      lastName,
      email,
    }
  }


  updateUser(changedData, nameType) {
    // console.log(this.user)
    // console.log(changedData, nameType)
    switch (nameType) {
      case 'firstName': {
        this.user.firstName = changedData;
        return this.user
      }
      case 'lastName': {
        this.user.lastName = changedData;
        return this.user
      }
      case 'email': {
        this.user.email = changedData;
        return this.user
      }
      default: console.log('update user failed to update')
        break;
    }
  }

  // if (nameType === 'firstName') {
  //   // change first name user object
  //   this.user.firstName = changedData
  //   return this.user

  // } else if (nameType === 'lastName') {
  //   // change last name user object
  //   this.user.lastName = changedData
  //   return this.user

  // } else if (nameType === 'email') {
  //   this.user.email = changedData
  //   return this.user
  // }
  // else {
  //   return this.user
  // }


  deleteUser() {
    return this.user = {}
  }
}