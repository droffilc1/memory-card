import React, { useState } from 'react';
import Card from './Card';
import Header from './Header';

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArr, addCard] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = () => {
    setHighScore(score);
  };

  const handleCard = (cardName) => {
    addCard((prevArr) => [...prevArr, cardName]);
  };

  const reset = () => {
    setScore(0);
    addCard([]);
  };

  const handleGameLogic = (cardName) => {
    if (!cardsArr.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      handleHighScore();
      reset();
    }
  };

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <div className="card-container" id="card-container">
        <Card
          handleGameLogic={handleGameLogic}
          score={score}
          highScore={highScore}
        />
      </div>
    </div>
  );
}

export default Game;
