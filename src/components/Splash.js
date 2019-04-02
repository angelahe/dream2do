/**
 * Component for the first screen.
 */

import React from 'react'

const Splash = (props) => {
  return (
    <div className="spacing">
      <div className="title">Welcome to Dream2do</div>
      <input type="text" placeholder="email" required />
      <button onClick={props.handleClick}>Go to Flashcards</button><br />
    </div>
  )
}

export default Splash