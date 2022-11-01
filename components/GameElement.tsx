import type { FC } from 'react';
import React from 'react';
import { css } from "@emotion/css";
import { GameItem } from './types/types';


interface Props {
  data: GameItem;
}

const GameElement: FC<Props> = ({data}) => {
  return (
    <div className={css`
      position: relative;
    `}>
      <img className={css`
        cursor: move;
        background: transparent;
        width: 131px;
        height: 131px;
      `} src={data.img!.src} alt={'cakes'}/>
      <span className={css`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-weight: 400;
        font-size: 56px;
        line-height: 68px;
        letter-spacing: 2px;
        color: #FFFFFF;
      `}>{data.content}</span>
    </div>
  )
}

export default GameElement;
