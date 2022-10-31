import React from 'react';
import type { FC } from 'react';
import { css } from "@emotion/css";

interface Props {
}

const Round: FC<Props> = ({}) => {
    return (
      <div className={css`
        width: 131px;
        height: 131px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.06);
        box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
      `}></div>
    )
}

export default Round;
