/**
 * Component to select the level
 * @constructor
 * @param {Object} deck - deck object
 * @param {String} levelClicked - the level the user clicked on
 */

import React from 'react';
import Level1Card from './Level1Card';
import Level2Card from './Level2Card';

import Deck from './deck';

class LevelSelector extends React.Component {
  constructor(){
    super();
    this.state = {
      deck: new Deck(),
      levelClicked:'',
    }
  }

  // get the text from the button and use that to select the correct level component
  handleClick = (args) =>{
    this.setState({
      levelClicked:args.target.textContent.toLowerCase()
    })
  }

  clearLevel = () => {
    this.setState({
      levelClicked:'',
    })
  }

  render(){
    if(this.state.levelClicked === 'review'){
      return(
        <Level1Card clearLevel={this.clearLevel} currentDeck={this.state.deck}/>
      );
    } else if (this.state.levelClicked === 'recognize'){
      return(
        <Level2Card clearLevel={this.clearLevel} currentDeck={this.state.deck}/>
      );
    } else if (this.state.levelClicked === 'produce'){

    } else {
      return(
        <div className="selectorWrapper">
          <h1>Select Level</h1>
          <button onClick={this.handleClick}>Review</button>
          <button onClick={this.handleClick}>Recognize</button>
          <button onClick={this.handleClick}>Produce</button>
        </div>
      );
    }
  }

}

export default LevelSelector;