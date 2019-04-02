/**
 * Component to switch between deck selector and level selector
 * @constructor
 * @param {Object} state - Variable holding the deck selected
 */

import React from 'react';
import LevelSelector from './LevelSelector';
import DeckSelector from './DeckSelector';
import StatusBar from './StatusBar';
import NavBar from './NavBar';
import Decks from '../data/second';

import './Flashcard.css'

class FlashcardDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deckSelected: '',
    }
  }

  deckClicked = (args) => {
    this.setState({
      deckSelected:args.target.id.replace(/\D/g,''),
    })
  }

  render() {
    return (
      <div className="flashCardDeck">
        <StatusBar />
        {(this.state.deckSelected === '') ? <DeckSelector data={Decks} clicked={this.deckClicked}/> : null}
        {(this.state.deckSelected !== '') ? <LevelSelector {...this.state} langOne={this.props.languageOne} langTwo={this.props.languageTwo}/> : null}
        <NavBar />
      </div>
    );
  }
}

export default FlashcardDeck;