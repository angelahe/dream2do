import Card from '../components/card'

test('Test making a card', () => {
  const image = 'image';
  const lang1 = 'language one';
  const lang2 = 'language two';
  const audiol1 = 'audio L1';
  const audiol2 = 'audio L2';
  const newCard = new Card(image, lang1, lang2, audiol1, audiol2);

  //Check if anything is in card
  expect(newCard.image).toBe(image);
  expect(newCard.textLanguageOne).toBe(lang1);
  expect(newCard.textLanguageTwo).toBe(lang2);
  expect(newCard.audioLanguageOne).toBe(audiol1);
  expect(newCard.audioLanguageTwo).toBe(audiol2);
})