import review from '../components/review';

test('Next and previous, and wrap around',() => {
  const newReview = new review();
  newReview.handleNextClick();
  expect(newReview.cardSide).toBe(false)
  expect(newReview.cardNumber).toBe(0);
  newReview.handleNextClick();
  expect(newReview.cardSide).toBe(true);
  expect(newReview.cardNumber).toBe(1);
  newReview.handlePrevClick();
  expect(newReview.cardSide).toBe(false);
  expect(newReview.cardNumber).toBe(0);
  newReview.handlePrevClick();
  expect(newReview.cardSide).toBe(true);
  expect(newReview.cardNumber).toBe(0);
  newReview.handlePrevClick();
  expect(newReview.cardSide).toBe(false);
  expect(newReview.cardNumber).toBe(newReview.deck.cardHolder.length-1);
  newReview.handleNextClick();
  expect(newReview.cardSide).toBe(true);
  expect(newReview.cardNumber).toBe(0);
  newReview.deck.cardHolder.map(() => newReview.handleNextClick());
  newReview.deck.cardHolder.map(() => newReview.handleNextClick());
  expect(newReview.cardSide).toBe(true);
  expect(newReview.cardNumber).toBe(0);

});