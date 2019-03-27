import React from 'react';
import FlashcardDeck from './components/FlashcardDeck/FlashcardDeck.js';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      appClicked: true,
      message: ""
    }
  }

  handleClick = () => {
    this.setState({appClicked: false});
  }

  render() {
    return (
      <main className="flashcardWrapper">
        {this.state.appClicked
          ?
          <div>
            <div> Hello world from app</div>
            <button onClick={this.handleClick}>Go to Flashcards</button>
          </div>
          : <FlashcardDeck/>
        }
      </main>
    );
  }
}

export default App;
