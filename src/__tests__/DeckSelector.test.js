import React from 'react';
import ReactDOM from 'react-dom';
import DeckSelector from '../components/DeckSelector'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeckSelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});