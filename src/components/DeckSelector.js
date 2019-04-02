/**
 * Component to select a deck
 */

import React from 'react';

const DeckSelector = (props) => {
  return(
    <div className="selectorWrapper">
      {props.data.map((v, index) => {
        return(
          <button onClick={props.clicked} key={props.data[index].deck.key} id={`Deck${index}`}>
            {props.data[index].deck.desc}
          </button>
        );
      })}
    </div>
  );
}

export default DeckSelector;
