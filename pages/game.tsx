import { css } from '@emotion/css';
import backgroundImage1 from '../images/background-game1.jpg'
import React, { FC, useEffect, useState } from 'react';
import useStateRef from 'react-usestateref'
import { Container } from "../components/Container";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { GameItem, getGameItems, getInitialItems } from "../components/functions";
import { useRouter } from "next/router";

interface Props {

}

 const Game: FC<Props> = () => {
  const [initialDeskItems, setInitialDeskItems, refDeskItems] = useStateRef([]);
  const [gameItems, setGameItems, refGameItems] = useStateRef([]);
  const [counter, setCounter, refCounter] = useStateRef(0);
  const router = useRouter();
  const {countSubject, values, direction} = router.query;

  useEffect(() => {
    setInitialDeskItems(getInitialItems(countSubject));
  }, [countSubject]);

  useEffect(() => {
    setGameItems(getGameItems(countSubject, values));
  }, [countSubject, values]);

  const handleAddingElement = (elem: GameItem) => {
    const copyOfGameItems = [...gameItems]
    const sortedGameData = copyOfGameItems.sort((a, b) => a.content - b.content);
    const copyOfInitialItem = [...refDeskItems.current];
    if (elem.content === sortedGameData[refCounter.current].content) {
      copyOfInitialItem.splice(refCounter.current, 1, elem)
      setInitialDeskItems(copyOfInitialItem);
      setGameItems(refGameItems.current.filter(it => it.id !== elem.id));
      setCounter( prev => prev + 1);
    }
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
        <Container initialData={initialDeskItems} gameData={gameItems} onAdd={handleAddingElement}/>
      </DndProvider>
    </main>
  )
}

export default Game;
