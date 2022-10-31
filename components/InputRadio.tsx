import React, { BaseSyntheticEvent } from 'react';
import type { FC } from 'react';
import { css } from "@emotion/css";

interface Props {
  id: string;
  value: string;
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: {
    target: {
      name: string;
      value: boolean;
    };
  }) => void;
}

const InputRadio: FC<Props> = ({id, value, label, name, checked, onChange}) => {
  const handleChange = (e: BaseSyntheticEvent) =>
    onChange({ target: { name: e.target.name, value: e.target.value } });
  return (
    <>
      <input className={css`
        display: none;
        &:checked + label {
          background: #FFD748;
        }
      `} id={id} type="radio" name={name} value={value} onChange={handleChange}  checked={checked}/>
      <label className={css`
        display: inline-block;
        cursor: pointer;
        padding: 2px 24px;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: #423F45;
        border: none;
        background: #ffe0a6;
        border-radius: 20px;
        user-select: none;

        :checked {
          background: #ffe0a6;
        }

        :hover {
          color: #666;
        }
      `} htmlFor={id}>{label}</label>
    </>
  )
}

export default InputRadio;
