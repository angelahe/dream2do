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
        <Level1Card clearLevel={this.clearLevel}/>
      );
    } else if (this.state.levelClicked === 'recognize'){
      return(
        <Level2Card clearLevel={this.clearLevel}/>
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