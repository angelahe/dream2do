import React from "react";

const cardDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cardNumber = 0;

function handlePrevClick() {
  if (cardNumber === 0) {
    cardNumber = 10;
    
  } else {
    cardNumber--
  } 
  console.log(cardNumber)
}

function handleNextClick() {
    if (cardNumber === 10) {
        cardNumber = 0;
      } else {
        cardNumber++
      } 
      console.log(cardNumber)
}

const Level1Card = props => {
  return (
    <div className="playCard">
      <div className="cardImg"> Image</div>
      <div className="cardText">{cardDeck[cardNumber]}</div>
      <span className="audioBtn">audio</span>
      <br />
      <br />
      <span onClick={handlePrevClick} className="navBtn">
        prev
      </span>
      <br />
      <span onClick={handleNextClick} className="navBtn">
        next
      </span>

      <br />
    </div>
  );
};

export default Level1Card