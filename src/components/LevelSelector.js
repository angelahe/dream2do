import React from 'react';
import Level1Card from './Level1Card';
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

  render(){
    if(this.state.levelClicked === 'review'){
      return(
        <Level1Card />
      );
    } else if (this.state.levelClicked === 'recognize'){

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