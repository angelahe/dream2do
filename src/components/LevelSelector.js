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
import { Row, Radio } from 'antd';

class LevelSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: new Deck(),
      levelClicked: '',
      size: 'small'
    }
  }

  // get the text from the button and use that to select the correct level component
  handleClick = (args) => {
    this.setState({
      levelClicked: args
    })
  }

  clearLevel = () => {
    this.setState({
      levelClicked: '',
    })
  }

  render() {
    if (this.state.levelClicked === 'review') {
      return (
        <Level1Card clearLevel={this.clearLevel} currentDeck={this.state.deck} />
      );
    } else if (this.state.levelClicked === 'recognize') {
      return (
        <Level2Card clearLevel={this.clearLevel} currentDeck={this.state.deck} />
      );
    } else if (this.state.levelClicked === 'produce') {

    } else {
      return (
        <div className="selectorWrapper">
          <h1>Select Level</h1>
          <Radio.Group value={this.state.size}>
            <Radio.Button onClick={() => this.handleClick('review')}>Review</Radio.Button>
            <Radio.Button onClick={() => this.handleClick('recognize')}>Recognize</Radio.Button>
            <Radio.Button onClick={() => this.handleClick('#')}>#</Radio.Button>
          </Radio.Group>
        </div>
      );
    }
  }

}

export default LevelSelector;