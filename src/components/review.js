import Deck from './deck'

class review{
  constructor(){
    this.cardNumber = 0;
    this.cardSide = true; //Language one is true, language two is false
    this.deck = new Deck;
  }

  handlePrevClick() {
    if (this.cardNumber === 0) {
      this.cardNumber = this.deck.cardHolder.length - 1;
    } else {
      this.cardNumber--;
    }
    console.log(this.deck.cardHolder[this.cardNumber].textLanguageOne);
  }
  
  handleNextClick() {
    if (this.cardNumber === this.deck.cardHolder.length - 1) {
      this.cardNumber = 0;
    } else {
      this.cardNumber++;
    }
    console.log(this.deck.cardHolder[this.cardNumber].textLanguageOne);
  }

  // playAudio() {
//   console.log('sound')
//   // return (
//   //   <Sound
//   //     url={this.props.this.deck[x].audio}
//   //   />
//   // );
// }
// }
}

export default review