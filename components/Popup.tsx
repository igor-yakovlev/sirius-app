import React from 'react';
import type { FC } from 'react';
import { css } from "@emotion/css";

interface Props {
  children: any;
}

const ToolTip: FC<Props> = ({children}) => {
  return (
    <div className={css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(32, 21, 54, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <div className={css`
        padding: 20px;
        background-image: linear-gradient(180deg, #67DF9F 0%, rgba(141, 103, 223, 0) 100%);
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
        width: 661px;
      `}>
        <div className={css`
          padding: 23px 74px;
          background: #fafafa;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
          border-radius: 40px;
          font-weight: 400;
          font-size: 40px;
          line-height: 51px;
          color: #5F40A1;
          text-align: center;
        `}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ToolTip;
