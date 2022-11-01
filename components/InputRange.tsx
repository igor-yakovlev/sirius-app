import React, { BaseSyntheticEvent } from 'react';
import type { FC } from 'react';
import { css } from "@emotion/css";
import Title from "./Title";

interface Props {
  data: string[];
  label: string;
  min: number;
  max: number;
  id: string;
  onChange?: (e: BaseSyntheticEvent) => void;
  name: string;
  value: number | string;
}


const InputRange: FC<Props> = ({data, label, min, max, id, onChange, name, value}) => {

  return (
    <div>
      <label className={css`margin-bottom: 16px;`} htmlFor={name}><Title>{label}</Title></label>
      <datalist className={css`
        font-size: 24px;
        line-height: 29px;
        color: #4F4B61;
        width: 100%;
        display: flex;
        justify-content: space-between;

      `} id={id}>
        {data.map(it => {
          return <option className={css`font-weight: 700;`} key={it} label={it}>{it}</option>
        })}
      </datalist>
      <input className={css`
        -webkit-appearance: none;
        width: 100%;
        background: #FFD748;
        border-radius: 10px;

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 23px;
          width: 23px;
          border-radius: 50%;
          background: #104987;
          cursor: ew-resize;
          box-shadow: 0 0 2px 0 #555;
          transition: background .3s ease-in-out;
        }
      `} type={"range"} id={name} min={min} max={max} list={id} name={name} value={value} onChange={onChange}/>
    </div>
  )
}

export default InputRange;
