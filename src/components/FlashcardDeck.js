import React from 'react';
import StatusBar from './StatusBar';
import NavBar from './NavBar';
import PlayArea from './PlayArea';

import '../styles/Flashcard.css'

class FlashcardDeck extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            deck : []
        }
    }
    render() {

        return (
            <div className='flashcardWrapper'>
                <h1>This is the FlashCard Deck app</h1>
                <StatusBar />
                <PlayArea />
                <NavBar />
            </div>
        );

    }
}
export default FlashcardDeck;