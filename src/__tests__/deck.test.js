import Deck from '../components/deck'

test('Test making a deck', () => {
  const newDeck = new Deck();

  //Check if anything is in deck
  expect(newDeck).not.toBeNull()
})