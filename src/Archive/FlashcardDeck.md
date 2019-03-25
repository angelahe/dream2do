import React from 'react';
import PlayArea from '../PlayArea';

import LevelSelector from '../LevelSelector';

class FlashcardDeck extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ,
    }
  }
  render() {
    return (
      
        <LevelSelector deck={this.state.deck} />
        

    );

  }
}
export default FlashcardDeck;