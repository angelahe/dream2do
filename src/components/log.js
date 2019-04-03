/**
 * Reads and writes to a localstorage log
 * @constructor
 *   @check - if log is null, create a new log
 *   @param {object} today - get today's date in YYYY-MM-DD format
 */

class log{
  constructor(){
    if(localStorage.getItem('log') === null){localStorage.setItem('log','[]')}
    if(localStorage.getItem('nameEmail') === null){localStorage.setItem('nameEmail','[]')}
    this.today = new Date();
  }

  // Write to the log for recognize and produce
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

  // Parse the recognize/produce log back into an array
  read(){
    return JSON.parse(localStorage.getItem('log'))
  }

  writeNameEmail(name,email){
    let nameEmailList = JSON.parse(localStorage.getItem('nameEmail'));
    const newNameEmail = {
      name:name,
      email:email,
      time:`${this.today.getHours()}:${this.today.getMinutes()}`,
    }

    nameEmailList.push(newNameEmail)

    localStorage.setItem(
      'nameEmail',JSON.stringify(nameEmailList)
    )
  }

  readNameEmail(){
    return JSON.parse(localStorage.getItem('nameEmail'))
  }

}

export default log;