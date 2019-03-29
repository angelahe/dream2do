import React from 'react';
import './App.css';
import FlashcardDeck from './components/FlashcardDeck';
import Splash from './components/Splash'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      appClicked: true,
      message: ""
    }
  }

  handleClick = () => {
    this.setState({ appClicked: false });
  }

  render() {
    return (

      <main className="flashcardWrapper">
        {this.state.appClicked
          ?
          <Splash handleClick={this.handleClick} />
          : <FlashcardDeck />
        }

      </main>
    );
  }
}

export default App;
