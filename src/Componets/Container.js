import React, { useState, useEffect } from 'react';
import Card from './Card';
import luffy from '../Images/luffy.jfif';
import zoro from '../Images/zoro.jfif';
import nami from '../Images/nami.jfif';
import usopp from '../Images/usopp.jfif';
import sanji from '../Images/sanji.jfif';
import robin from '../Images/robin.jfif';
import chopper from '../Images/chopper.jfif';
import franky from '../Images/franky.jfif';
import brook from '../Images/brook.jfif';
import jinbe from '../Images/jinbe.jfif';
import law from '../Images/law.jfif';
import shanks from '../Images/shanks.jfif';

function Container(props) {
  const { handleGameLogic, score, highScore } = props;

  let Images = [
    {
      src: luffy,
      title: 'Luffy',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: zoro,
      title: 'Zoro',
      backgroundColor: 'rgb(54 145 154)',
      borderStyle: '1px solid rgb(54 145 154)',
    },
    {
      src: nami,
      title: 'Nami',
      backgroundColor: 'rgb(119 4 4)',
      borderStyle: '1px solid rgb(119 4 4)',
    },
    {
      src: usopp,
      title: 'Usopp',
      backgroundColor: 'rgb(76 136 89)',
      borderStyle: '1px solid rgb(76 136 89)',
    },
    {
      src: sanji,
      title: 'Sanji',
      backgroundColor: 'rgb(111 31 0)',
      borderStyle: '1px solid rgb(111 31 0)',
    },
    {
      src: robin,
      title: 'Robin',
      backgroundColor: 'rgb(255 141 0)',
      borderStyle: '1px solid rgb(255 141 0)',
    },
    {
      src: chopper,
      title: 'Chopper',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: franky,
      title: 'Franky',
      backgroundColor: 'rgb(245 194 80)',
      borderStyle: '1px solid rgb(245 194 80)',
    },
    {
      src: brook,
      title: 'Brook',
      backgroundColor: 'rgb(136 96 6)',
      borderStyle: '1px solid rgb(136 96 6)',
    },
    {
      src: jinbe,
      title: 'Jinbe',
      backgroundColor: 'rgb(255 148 148)',
      borderStyle: '1px solid rgb(255 148 148)',
    },
    {
      src: law,
      title: 'Law',
      backgroundColor: 'rgb(189 166 82)',
      borderStyle: '1px solid rgb(189 166 82)',
    },
    {
      src: shanks,
      title: 'Shanks',
      backgroundColor: 'rgb(226 143 58)',
      borderStyle: '1px solid rgb(226 143 58)',
    },
  ];

  const [cards, setNewCards] = useState(Images);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      [newCards[randomIndex], newCards[i]] = [
        newCards[i],
        newCards[randomIndex],
      ];
    }
  };

  useEffect((cards) => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [score, highScore]);

  return (
    <div>
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
      ))}
    </div>
  );
}

export default Container;
