import type { FC } from 'react'
import { Box } from './Box'
import Desk from "./Desk";
import { css } from "@emotion/css";
import { GameItem, RoundItem } from "./functions";

interface Props {
  initialData: RoundItem[];
  gameData: GameItem[];
  onAdd: (item: any) => void
}

export const Container: FC<Props> = ({initialData, gameData, onAdd}) => {
  const handleDroppedItem = (item: any) => {
    onAdd(item)
  }
  return (
    <div>
      <div className={css`
        overflow: hidden;
        clear: both;
        margin-bottom: 100px;
        display: flex;
        gap: 20px;
      `}>
        {gameData.map(it => <Box key={it.id} data={it} onDrop={handleDroppedItem}/>)}
      </div>
      <div style={{overflow: 'hidden', clear: 'both'}}>
        <Desk items={initialData}/>
      </div>
    </div>
  )
}
