/**
 * Component the navigation bar (Bottom bar)
 */

import React from 'react';

const NavBar = (props) => {
  return (
    <div className='navBar'>
    {(props.deckSelected)?
      <button onClick={props.clearDeck}>Select deck</button>:null}
    </div>
  );
}

export default NavBar;