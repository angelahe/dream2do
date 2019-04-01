import recognize from '../components/recognize';
import Deck from '../components/deck';

test('Recognize functions', () => {
  const newRec = new recognize(new Deck());
  const deckLength = newRec.deck.cardHolder.length;
  newRec.logTestResult(true);

  //Move off first side of first card
  newRec.nextSide();
  expect(newRec.cardNumber).toBe(0);
  expect(newRec.cardSide).toBe(false);

  //Select correct on card and remove said card, then move to next card
  newRec.cardCorrect();
  expect(newRec.deck.cardHolder.length).toBe(deckLength-1);

  //Move off first side of second card
  newRec.nextSide();
  expect(newRec.cardNumber).toBe(1);
  expect(newRec.cardSide).toBe(false);

  //select wrong on card and move to next card
  newRec.cardWrong();
  expect(newRec.cardNumber).toBe(2);
  expect(newRec.cardSide).toBe(true);

  //Quickly spam through all cards and test wrapping, removing all cards
  const currentLength = newRec.deck.cardHolder.length;
  for(let x = 0; x < currentLength;x++){
    newRec.nextSide();
    newRec.cardWrong();
    newRec.goNextCard();
    newRec.cardCorrect();
  }
  expect(newRec.deck.cardHolder.length).toBe(0);
  
});