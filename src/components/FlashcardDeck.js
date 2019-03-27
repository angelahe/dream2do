import React from 'react';
import LevelSelector from './LevelSelector';
import DeckSelector from './DeckSelector';
import StatusBar from './StatusBar';
import NavBar from './NavBar';

import './FlashcardDeck/Flashcard.css'

class FlashcardDeck extends React.Component {
  constructor(){
    super();
    this.state = {
      deckSelected:'test',
    }
  }

  render(){
    return(
      <div className="flashCardDeck">
        <StatusBar />
        {(this.state.deckSelected === '') ? <DeckSelector/> : null}
        {(this.state.deckSelected !== '') ? <LevelSelector {...this.state} /> : null}
        <NavBar />
      </div>
    );
  }
}

export default FlashcardDeck;