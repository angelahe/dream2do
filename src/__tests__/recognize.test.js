import recognize from '../components/recognize';

test('Recognize functions', () => {
  const newRec = new recognize();
  expect(newRec.cardCorrect()).toEqual({"L1": "language1.1", "L2": "language2.1", "corrent": true, "date": "28/3/2019"});
  expect(newRec.cardWrong()).toEqual({"L1": "language1.1", "L2": "language2.1", "corrent": false, "date": "28/3/2019"});
})