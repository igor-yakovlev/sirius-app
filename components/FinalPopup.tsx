import React from 'react';
import type { FC } from 'react';
import { css } from '@emotion/css';
import Button from "./Button";
import Popup from "./Popup";

interface Props {
  onRepeat: () => void;
}

const FinalPopup: FC<Props> = ({ onRepeat}) => {
    return (
      <Popup>
        <h2 className={css`
          font-weight: 400;
          font-size: 128px;
          line-height: 163px;
          align-items: center;
          background-image: linear-gradient(180deg, #FFF9D8 8.65%, #FFE44F 69.58%);
          color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          text-align: center;
        `}>Победа</h2>
        <p className={css`
          padding: 22px 0 73px 0;
        `}>Молодец! Ты успешно справился с заданием!</p>
        <Button onClick={onRepeat}>Заново</Button>
      </Popup>
    )
}

export default FinalPopup;
