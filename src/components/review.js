import Deck from './deck'

class review{
  constructor(){
    this.cardNumber = 0;
    this.cardSide = true; //Language one is true, language two is false
    this.deck = new Deck();
  }

  handleNextClick() {
      if (!this.cardSide) {
        if (this.cardNumber === this.deck.cardHolder.length - 1) {
          this.cardNumber = 0;
        } else {
          this.cardNumber++;
        }
      }
      this.cardSide = !this.cardSide;

      console.log("cardside is ", this.cardSide);
    console.log(this.deck.cardHolder[this.cardNumber].textLanguageOne);
  }

  handlePrevClick() {
        if (this.cardSide) {
            if (this.cardNumber === 0) {
                this.cardNumber = this.deck.cardHolder.length - 1;
            } else {
                this.cardNumber--;
            }
        }
        this.cardSide = !this.cardSide;
        console.log("cardside is ", this.cardSide);
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