import React from 'react';
import ReactDOM from 'react-dom';
import Level2Card from '../components/Level2Card'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Level2Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});