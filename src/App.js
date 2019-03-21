import React, { Component } from 'react';
import FlashcardDeck from './components/FlashcardDeck/FlashcardDeck.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
      this.state = {
        appClicked: "dashboard",
          message: ""
      }
  }

  handleClick = () => {
    this.setState({appClicked : "flashcard"});
  }

  render() {
    return (
        <div>
            {(this.state.appClicked === "dashboard")
                ?
                <div>
                  <div> Hello world from app</div>
                  <button onClick={this.handleClick}>Go to Flashcards</button>
                </div>
                : null
            }
            {(this.state.appClicked === "flashcard")
              ? <FlashcardDeck /> : null}
        </div>
    );
  }
}

export default App;
