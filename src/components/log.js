class log{
  constructor(){
    if(localStorage.getItem('log') === null){localStorage.setItem('log','')}
    this.today = new Date();
  }

  write(level,languageOne,languageTwo,correct){
    localStorage.setItem(
      `log`,JSON.stringify(
        JSON.parse(
          localStorage.getItem('log')
        ).push({
          level:level,
          L1:languageOne,
          L2:languageTwo,
          date:`${this.today.getFullYear()}-${(this.today.getMonth()+1)}-${this.today.getDate()}`,
          correct:correct,
        })
      )
    );
  }

  read(){
    return JSON.parse(localStorage.getItem('log'))
  }
}

export default log;