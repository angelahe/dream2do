import React from 'react';

class Level1Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCard: this.props.deck.cardNumber,
        }
    }
    render() {
        return (
            <div className="playCard" >
                <div className="cardImg"> Image</div>
                <div className="cardText">{this.props.deck.cardHolder[this.state.currentCard].textLanguageOne}</div>
                <div className="card-btns">
                  <div className="audioBtn" onClick={() => this.props.deck.playAudio()}>audio
                  </div>
                  <div onClick={() => {this.props.deck.handlePrevClick();this.setState({currentCard:this.props.deck.cardNumber})}} className="navBtn">prev
                  </div>
                  <div onClick={() => {this.props.deck.handleNextClick();this.setState({currentCard:this.props.deck.cardNumber})}} className="navBtn">next
                  </div>
                </div>
                
            </div>
        );
    }
};

export default Level1Card;
