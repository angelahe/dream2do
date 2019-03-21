import React from 'react';
import ReactDOM from 'react-dom';
import FlashcardDeck from "../components/FlashcardDeck";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlashcardDeck />, div);
    ReactDOM.unmountComponentAtNode(div);
});