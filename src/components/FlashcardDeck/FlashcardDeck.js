import React from 'react';
import StatusBar from '../StatusBar';
import NavBar from '../NavBar';
import PlayArea from '../PlayArea';
import Deck from '../deck';

import './Flashcard.css'

class FlashcardDeck extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            deck : new Deck(),
        }
    }
    render() {
        return (
            <div className='flashcardWrapper'>
                <StatusBar />
                <PlayArea deck={this.state.deck}/>
                <NavBar />
            </div>
        );

    }
}
export default FlashcardDeck;