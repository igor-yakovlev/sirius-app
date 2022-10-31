import React, { FC, ReactNode } from "react";
import { css } from "@emotion/css";

interface buttonProps {
  name?: string;
  children?: ReactNode | undefined
  onClick?: () => void
}

const Button: FC<buttonProps> = ({name, onClick = () => null, children}) => {
  return (
    <button name={name} onClick={onClick} className={css`
      padding: 8px 77px 15px;
      background: #38DF7A;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      border: none;
      color: #FFFFFF;
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;
      cursor: pointer;
    `}>
      {children}
    </button>
  )
}

export default Button;
