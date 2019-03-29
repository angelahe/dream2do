import React from 'react';
import ReactDOM from 'react-dom';
import Level1Card from '../components/Level1Card'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Level1Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});