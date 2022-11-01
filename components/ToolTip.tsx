import React from 'react';
import type { FC } from 'react';
import { css } from "@emotion/css";

interface Props {
  children: string;
  onOpen: boolean;
}

const ToolTip: FC<Props> = ({children, onOpen}) => {
  return (
    <div className={css`
      position: absolute;
      top: 35%;
      left: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 2s ease;
      opacity: ${onOpen ? '1' : '0'};
    `}>
      <div className={css`
        padding: 40px;
        background: #fafafa;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
        font-weight: 400;
        font-size: 40px;
        line-height: 51px;
        color: #5F40A1;
      `}>
        {children}
      </div>
    </div>
  )
}

export default ToolTip;
