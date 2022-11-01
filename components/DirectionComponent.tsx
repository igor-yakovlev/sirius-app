import React from 'react';
import type { FC } from 'react';
import { css } from "@emotion/css";
import ascendingArrow from "../images/arrows/ascending-arrow.png";

interface Props {
  direction: string | string[];
}

const mapDirection: Record<string, string> = {
  "ascending": "По возрастанию",
  "descending": "По убыванию",
};

const getDirection = (direction: string | string[]) => mapDirection[direction as string];

const DirectionComponent: FC<Props> = ({direction}) => {
  return (
    <div className={css`
      position: relative;
      display: grid;
      place-items: ${direction === 'ascending' ? 'start' : 'end'};
      margin-bottom: 23px;
    `}>
        <span className={css`
          font-weight: 400;
          font-size: 36px;
          line-height: 44px;
          color: #FFFFFF;
        `}>{getDirection(direction)}</span>
      <img className={css`
        position: absolute;
        top: -20%;
        ${direction === 'ascending' ? 'left: 20px' :  'right: -20px'};
        ${direction === 'descending' && 'rotate: 180deg'}
      `} src={ascendingArrow.src} alt="arrow"/>
    </div>
  )
}

export default DirectionComponent;
