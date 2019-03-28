/**
 * Reads and writes to a localstorage log
 * @constructor
 *   @check - if log is null, create a new log
 *   @param {object} today - get today's date in YYYY-MM-DD format
 */
class log{
  constructor(){
    if(localStorage.getItem('log') === null){localStorage.setItem('log','[]')}
    this.today = new Date();
  }


  write(level,languageOne,languageTwo,correct){
    let testResult = JSON.parse(localStorage.getItem('log'));
    const testLogItem = {
      level: level,
      L1: languageOne,
      L2: languageTwo,
      date: `${this.today.getFullYear()}-${(this.today.getMonth()+1)}-${this.today.getDate()}`,
      correct: correct,
    }

    testResult.push(testLogItem);

    localStorage.setItem(
      `log`,JSON.stringify(testResult)
    );
  }

  read(){
    return JSON.parse(localStorage.getItem('log'))
  }
}

export default log;