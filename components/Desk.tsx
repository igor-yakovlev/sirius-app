import type { FC } from 'react'
import React from 'react';
import { css } from "@emotion/css";
import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import deskWood from '../images/container/container1.png';
import Round from "./Round";
import GameElement from "./GameElement";
import { GameItem, RoundItem } from "./types/types";
import { GameArray } from "../pages/game";

interface Props {
  items: GameArray;
  direction: string | string[];
}

const Desk: FC<Props> = ({items, direction}) => {
  const [{canDrop, isOver, getDropResult}, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({name: 'Desk'}),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      getDropResult: monitor.getDropResult(),
    }),
  }))
  return (
    <div ref={drop} className={css`
      background-image: url(${deskWood.src});
      background-repeat: no-repeat;
      background-position: center;
      width: 886px;
      height: 240px;
      display: flex;
      gap: 4px;
      justify-content: center;
      flex-direction: ${direction === 'ascending' ? 'row': 'row-reverse'};
      padding: 0 30px;
      align-items: center;
    `}>
      {
        items.map(item => {
          return item.type === 'round' ? (
            <Round key={item.id}/>
          ) :
            (
              <GameElement key={item.id} data={item as GameItem}/>
            )

        })
      }
    </div>
  )
}

export default Desk;
