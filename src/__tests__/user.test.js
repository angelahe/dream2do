import User from "../components/user"

test('should create a new user', () => {
  const person = new User('Max', 'Mad');
  expect(person.user.lastName).toBe('Mad')
  expect(person.user.firstName).toBe('Max')
})

test('should be able to change first and lastname', () => {
  const originalUser = new User('Max', 'Mad');
  const nameType = 'firstName'
  const changedName = 'Roger'
  const newUser = originalUser.updateUser(changedName, nameType)
  expect(originalUser.user.firstName).toBe(newUser.firstName)
  expect(originalUser.user.firstName).not.toBe([])
})

test('should be able to change email', () => {
  const originalUser = new User('Max', 'Mad', 'madmax@evolveu.ca')
  const nameType = 'email'
  const changedEmail = 'maddermax@evolveu.ca'
  const newUser = originalUser.updateUser(changedEmail, nameType)
  expect(originalUser.user.email).toBe(newUser.email)
  expect(originalUser.user.email).not.toBe([])
})


test('should delete firstName and lastName', () => {
  const person = new User('Max', 'Mad');
  expect(person.user.firstName).toBe('Max')
  expect(person.user.lastName).toBe('Mad')
  expect(person.user).toHaveProperty('lastName', 'Mad')
  person.deleteUser()
  expect(person.user).not.toHaveProperty('firstName')
  expect(person.user).not.toHaveProperty('lastName', 'Mad')
})