import lang from '../components/lang'

test('should detect object creation', () => {
  const newLang = new lang('english')
  const testLangForObject = typeof newLang
  expect(testLangForObject).toBe('object')
})

test('checkLang should 2 languages', () => {
  // instantiate the new lang Class
  const newLang = new lang('english')

  // take new Object that was intantiated and use method/function checkLang to test language array length.
  const langs = newLang.checkLang(arr)
  expect(langs.length).toBe(2)
})