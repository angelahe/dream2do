import React from 'react';

class FlashcardDeck extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            deck : []
        }
    }
    render() {

        return (
            <div>
                <h1>This is the FlashCard Deck app</h1>
                
            </div>
        );

    }
}
export default FlashcardDeck;