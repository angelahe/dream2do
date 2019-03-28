import recognize from '../components/recognize';

xtest('Recognize functions', () => {
  const newRec = new recognize();
  console.log("1");
  expect(newRec.cardCorrect()).toEqual({"L1": "language1.1", "L2": "language2.1", "correct": true, "date": "28/3/2019"});
  console.log("2");
  //expect(newRec.cardWrong()).toEqual({"L1": "language1.1", "L2": "language2.1", "correct": false, "date": "28/3/2019"});
})