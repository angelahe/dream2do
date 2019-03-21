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
                <span className="audioBtn" onClick={() => this.props.deck.playAudio()}>
                    audio
                </span>
                <br />
                <br />
                <span onClick={() => {this.props.deck.handlePrevClick();this.setState({currentCard:this.props.deck.cardNumber})}} className="navBtn">
                    prev
                </span>
                <br />
                <span onClick={() => {this.props.deck.handleNextClick();this.setState({currentCard:this.props.deck.cardNumber})}} className="navBtn">
                    next
                </span>
                <br />
            </div>
        );
    }
};

export default Level1Card;
