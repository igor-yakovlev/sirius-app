import React from 'react';
import type { FC } from 'react';
import { css } from "@emotion/css";

interface Props {
}

const Desk: FC<Props> = ({}) => {
    return (
      <div className={css`
          background: linear-gradient(198.7deg, #7F75F0 -40.02%, #101F32 96.22%);
          border-radius: 20px;
          padding: 20px;
        `}>
        <div className={css`
            background: #FFFFFF;
            border-radius: 20px;
            padding: 37px 64px 29px 64px;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}>
          Desk
        </div>
      </div>
    )
}

export default Desk;
