import React, { Component } from 'react';
import FlashcardDeck from './components/FlashcardDeck';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
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
                  < button onClick = {this.handleClick}>Go to Flashcards</button>
                </div>
                : null
            }
            {(this.state.appClicked==="flashcard")
              ? <FlashcardDeck></FlashcardDeck>
              : null}
        </div>
    );
  }
}

export default App;
