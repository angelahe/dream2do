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
                <StatusBar />
                <PlayArea />
                <NavBar />
            </div>
        );

    }
}
export default FlashcardDeck;