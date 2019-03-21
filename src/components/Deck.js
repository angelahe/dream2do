import Card from './Card';

class Deck{
    constructor(){
        this.cardHolder = [
            new Card('img1','language1.1','language2.1','audiofile1'),
            new Card('img1','language1.2','language2.2','audiofile2'),
            new Card('img1','language1.3','language2.3','audiofile3'),
            new Card('img1','language1.4','language2.4','audiofile4'),
            new Card('img1','language1.5','language2.5','audiofile5'),
            new Card('img1','language1.6','language2.6','audiofile6'),
            new Card('img1','language1.7','language2.7','audiofile7'),
            new Card('img1','language1.8','language2.8','audiofile8'),
            new Card('img1','language1.9','language2.9','audiofile9'),
            new Card('img1','language1.10','language2.10','audiofile10'),
        ]
    }
}

export default Deck;