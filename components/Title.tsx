import React from 'react';
import type { FC } from 'react';
import { css } from "@emotion/css";

interface Props {
  children: string;
}

const Title: FC<Props> = ({children}) => {
  return (
    <h1 className={css`
      margin-bottom: 16px;
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;
      text-align: center;
      color: #423F45;
    `}>{children}
    </h1>
  )
}

export default Title;
