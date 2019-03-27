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
  const result = newLang.addLang('wookielove')
  // take result and compare result array to test array
  expect(result[1]).toBe('wookielove')
  expect(result.length).toBe(2)
  expect(result.length).toBeLessThan(3)
})

test('editLang should remove the last language added', () => {
  const newLang = new lang('en')
  let testArr = newLang.addLang('es')
  expect(testArr.length).toBe(2)
  testArr = newLang.editLang(testArr)
  // take result and compare result array to test array
  expect(testArr.length).toBe(1)
})

test('deleteLangs should delete english from langArr', () => {
  const newLang = new lang('en')
  const updatedArr = []
  const result = newLang.deleteLangs()
  expect(result.length).toBe(updatedArr.length)
})

test('checkLang should find 2 languages', () => {
  // instantiate the new lang Class
  const newLang = new lang('en')
  //testing langArr length by default
  const checkLangDefault = newLang.checkLang()
  expect(checkLangDefault.length).toBe(1)

  const secondLanguage = 'es'
  newLang.addLang(secondLanguage)
  const checkLangWithSpanish = newLang.checkLang()
  //testing checkLang length
  expect(checkLangWithSpanish.length).toBe(2)
})