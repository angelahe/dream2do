import Card from '../components/card'

test('Test making a card', () => {
  const image = 'image';
  const lang1 = 'language one';
  const lang2 = 'language two';
  const audio = 'audio';
  const newCard = new Card(image, lang1, lang2, audio);

  //Check if anything is in card
  expect(newCard.image).toBe(image);
  expect(newCard.textLanguageOne).toBe(lang1);
  expect(newCard.textLanguageTwo).toBe(lang2);
  expect(newCard.audio).toBe(audio);
})