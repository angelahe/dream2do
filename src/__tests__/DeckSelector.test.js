import React from 'react';
import ReactDOM from 'react-dom';
import DeckSelector from '../components/DeckSelector'

import Decks from '../data/second';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeckSelector data={Decks}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});