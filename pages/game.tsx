import { css } from '@emotion/css';
import backgroundImage1 from '../images/background-game1.jpg'
import React, { FC, useEffect, useState } from 'react';
import useStateRef from 'react-usestateref'
import { Container } from "../components/Container";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getGameItems, getInitialItems } from "../components/functions";
import { useRouter } from "next/router";
import useSound from "use-sound";
import FinalPopup from "../components/FinalPopup";
import { GameArray, GameItem } from "../components/types/types";

interface Props {
}

const Game: FC<Props> = () => {
  const [initialDeskItems, setInitialDeskItems, refDeskItems] = useStateRef<GameArray>([]);
  const [gameItems, setGameItems, refGameItems] = useStateRef<GameItem[]>([]);
  const [counter, setCounter, refCounter] = useStateRef(0);
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();
  const {countSubject, values, direction} = router.query;
  const [playDrop] = useSound('/sounds/drop_sound.mp3', {
    volume: 0.25,
  });
  const [playError] = useSound('/sounds/error_sound.mp3', {
    volume: 0.25,
  });

  useEffect(() => {
    setInitialDeskItems(getInitialItems(countSubject!));
    setGameItems(getGameItems(countSubject, values));
  }, [countSubject, values]);

  const handleAddingElement = (elem: GameItem) => {
    playDrop();
    const copyOfGameItems = [...gameItems]
    const sortedGameItems = copyOfGameItems.sort((a, b) => {
      if (direction === 'ascending') {
        return a.content - b.content
      } else {
        return b.content - a.content
      }
    });
    const resultGameArray: GameArray = [...refDeskItems.current];
    if (elem.content === sortedGameItems[refCounter.current].content) {
      resultGameArray.splice(refCounter.current, 1, elem )
      setInitialDeskItems(resultGameArray);
      setGameItems(refGameItems.current.filter(it => it.id !== elem.id));
      setCounter(prev => prev + 1);
    } else {
      playError();
    }
    if(refCounter.current === +countSubject!) {
      setIsOpen(true);
      setCounter(0);
    }
  }

  const handleRepeat = () => {
    setInitialDeskItems(getInitialItems(countSubject!));
    setGameItems(getGameItems(countSubject, values));
    setIsOpen(false)
  }

  return (
    <main className={css`
      background-image: url(${backgroundImage1.src});
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      min-height: 100vh;
      display: grid;
      place-items: center;
    `}>
      <DndProvider backend={HTML5Backend}>
        <Container initialData={initialDeskItems} gameData={gameItems} onAdd={handleAddingElement} direction={direction!}/>
      </DndProvider>
      {isOpen && (
        <FinalPopup onRepeat={handleRepeat}/>
      )}
    </main>
  )
}

export default Game;
