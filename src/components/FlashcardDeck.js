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

  clearDeck = () => {
    this.setState({
      deckSelected: '',
    })
  }

  render() {
    return (
      <>
        {(this.state.deckSelected === '') ? <DeckSelector data={Decks} clicked={this.deckClicked}/> : null}
        {(this.state.deckSelected !== '') ?
          <div className="flashCardDeck">
            <StatusBar className="statusBar" homeScreen={this.props.homeScreen} />
            <LevelSelector {...this.state} langOne={this.props.languageOne} langTwo={this.props.languageTwo}/>
            <NavBar className="navBar" id="navAngela" deckSelected={this.state.deckSelected} clearDeck={this.clearDeck} />
          </div> :null }
      </>
    );
  }
}

export default FlashcardDeck;