import lang from '../components/lang'

test('should detect object creation', () => {
  //lang { lang: 'english', langArr: [ 'english' ] }
  const newLang = new lang('english')
  const defaultLang = newLang.lang //lang: 'english'
  const english = newLang.langArr[0]
  const defaultLength = newLang.langArr.length

  expect(defaultLang).toBe('english')
  expect(english).toBe('english')
  expect(defaultLength).toBe(1)
})

test('addLang should add any to langArr', () => {
  const newLang = new lang('en')
  const testArr = ['en', 'wookielove']
  const result = newLang.addLang('wookielove')
  // take result and compare result array to test array
  expect(result).toContain('wookielove')
  expect(result).toContain('wookielove')
  expect(result.length).toBe(2)
  expect(result.length).toBeLessThan(3)
})

xtest('editLang should remove the last language added', () => {
  const newLang = new lang('en')
  const testArr = ['en', 'es']
  const result = newLang.addLang('es')
  // take result and compare result array to test array
  expect(result).toBe(testArr)
})

xtest('deleteLangs should delete english from langArr', () => {
  const newLang = new lang('en')
  const updatedArr = ['es']
  const result = newLang.deleteLangs('en')
  expect(result).toBe(updatedArr)
})

xtest('checkLang should find 2 languages', () => {
  // instantiate the new lang Class
  const newLang = new lang('en')
  const secondLanguage = 'es'
  const newArray = ['en', 'es']

  const addedArray = newLang.addLang(secondLanguage)

  // take new Object that was intantiated and use method/function checkLang to test language array length.
  const langs = newLang.checkLang(newArray)
  expect(langs.length).toBe(addedArray.length)
})