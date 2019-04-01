import React from 'react';
import ReactDOM from 'react-dom';
import PlayArea from '../components/PlayArea'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayArea />, div);
  ReactDOM.unmountComponentAtNode(div);
});