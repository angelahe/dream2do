/**
 * Component for the first screen.
 */

import React from 'react'
import Decks from '../data/second';

const Splash = (props) => {
  const languageArray = Object.keys(Decks[0].deck.cards[0]).filter(value => {
    // console.log(value)
    return value.length === 2
  })
  // console.log(languageArray)
  return (
    <div className="spacing">
      <div className="title"> Welcome to Dream2do</div>
        <input className="" type="text" placeholder="name" />
        <input className="" type="email" placeholder="email" />
        <h3 className="subtitle">Language One:</h3>
        <select id="languageOne">
          {languageArray.map(value => {
            return(
              <option key={`L1${value}`}>
                {value}
              </option>
            );
          })}
        </select>
        <h3 className="subtitle">Language Two:</h3>
        <select id="languageTwo">
          {languageArray.map(value => {
            return(
              <option key={`L2${value}`}>
                {value}
              </option>
            );
          })}
        </select>
        <button onClick={props.handleClick}>Go to Flashcards</button>
    </div>
  )
}

export default Splash