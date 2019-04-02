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
import { Radio, Icon } from 'antd';
import './LevelSelector.css'

class LevelSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: new Deck(this.props.deckSelected, this.props.langOne, this.props.langTwo),
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
        <Level1Card clearLevel={this.clearLevel} currentDeck={this.state.deck} ref={(v) => console.log(v)}/>
      );
    } else if (this.state.levelClicked === 'recognize') {
      return (
        <Level2Card clearLevel={this.clearLevel} currentDeck={this.state.deck} />
      );
    } else if (this.state.levelClicked === 'produce') {

    } else {
      return (
        <div className="selectorWrapper">
          <h1 className="theangela">Select Level</h1>
          <Radio.Group value={this.state.size}>
            <Radio.Button onClick={() => this.handleClick('review')}><Icon type="eye" /></Radio.Button>
            <Radio.Button onClick={() => this.handleClick('recognize')}><Icon type="book" /></Radio.Button>
            <Radio.Button onClick={() => this.handleClick('#')}><Icon type="highlight" /></Radio.Button>
          </Radio.Group>
        </div>
      );
    }
  }

}

export default LevelSelector;