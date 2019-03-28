import Deck from './deck'

class recognize {
  constructor() {
    this.cardNumber = 0;
    this.cardSide = true; //Language one is true, language two is false
    this.deck = new Deck();
  }

  cardCorrect = () => {

    if (!this.cardSide) {
      if (this.cardNumber === this.deck.cardHolder.length - 1) {
        this.cardNumber = 0;
      } else {
        this.cardNumber++;
      }
    }
    this.cardSide = !this.cardSide;

    console.log(`${this.deck.cardHolder[this.cardNumber].textLanguageOne},${this.deck.cardHolder[this.cardNumber].textLanguageTwo}, Level 2, Correct`);
    localStorage.setItem(`log${this.cardNumber}`,JSON.stringify({
      L1:this.deck.cardHolder[this.cardNumber].textLanguageOne,
      L2:this.deck.cardHolder[this.cardNumber].textLanguageTwo,
      date:`28/3/2019`,
      corrent:true,
    }))
  }

  cardWrong = () => {
    
    console.log(`${this.deck.cardHolder[this.cardNumber].textLanguageOne},${this.deck.cardHolder[this.cardNumber].textLanguageTwo}, Level 2, Incorrect`);
    return({
      L1:this.deck.cardHolder[this.cardNumber].textLanguageOne,
      L2:this.deck.cardHolder[this.cardNumber].textLanguageTwo,
      date:`28/3/2019`,
      corrent:false,
    })
  }

}

export default recognize;