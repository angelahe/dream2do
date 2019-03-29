import log from '../components/log';

test('test result log', () => {
  //first test result
  const L1 = "dog";
  const L2 = "el perro";
  const level = "Level 2";
  const correct = false;
  //second test result
  const L1b = "cat";
  const L2b = "el gato";
  const levelb = "Level 3";
  const correctb = true;

  //test write to a new log, and read of one entry
  const newLog = new log();
  newLog.write(level, L1, L2, correct);
  let testRecord = newLog.read();

  expect(testRecord[0].level).toBe(level);
  expect(testRecord[0].L1).toBe(L1);
  expect(testRecord[0].L2).toBe(L2);
  expect(testRecord[0].correct).toBe(correct);

  newLog.write(levelb, L1b, L2b, correctb);
  testRecord = newLog.read();
  expect(testRecord[1].level).toBe(levelb);
  expect(testRecord[1].L1).toBe(L1b);
  expect(testRecord[1].L2).toBe(L2b);
  expect(testRecord[1].correct).toBe(correctb);
})