import type { FC } from 'react'
import { Box } from './Box'
import Desk from "./Desk";
import { css } from "@emotion/css";
import DirectionComponent from "./DirectionComponent";
import { GameItem, RoundItem } from "./types/types";
import { GameArray } from "../pages/game";

interface Props {
  initialData: GameArray;
  gameData: GameItem[];
  onAdd: (item: any) => void;
  direction: string | string[];
}

export const Container: FC<Props> = ({initialData, gameData, onAdd, direction}) => {
  const handleDroppedItem = (item: any) => {
    onAdd(item)
  }
  return (
    <div>
      <div className={css`
        overflow: hidden;
        clear: both;
        margin-bottom: 100px;
        width: 100%;
        height: 161.5px;
        display: flex;
        gap: 20px;
      `}>
        {gameData.map(it => <Box key={it.id} data={it} onDrop={handleDroppedItem}/>)}
      </div>
      <DirectionComponent direction={direction}/>
      <div style={{overflow: 'hidden', clear: 'both'}}>
        <Desk items={initialData} direction={direction}/>
      </div>
    </div>
  )
}
