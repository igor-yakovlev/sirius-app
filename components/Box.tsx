import type { FC } from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import { css } from "@emotion/css";
import { GameItem } from "./types/types";


interface BoxProps {
  data: GameItem;
  onDrop: ({}) => void
}

interface DragItem {
  data: GameItem;
}

export const Box: FC<BoxProps> = ({data, onDrop}) => {
  const [{isDragging}, drag, dragPreview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: {data},
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult<DragItem>()
        if (item && dropResult) {
          onDrop(item.data)
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [data],
  )
  const opacity = isDragging ? 0 : 1
  return (
    <div ref={drag} className={css`
      position: relative;
    `}>
      <img className={css`
        cursor: move;
        background: transparent;
        opacity: ${opacity};
      `} src={data.img!.src} alt={'cakes'}/>
      <span className={css`
        position: absolute;
        opacity: ${opacity};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-weight: 400;
        font-size: 56px;
        line-height: 68px;
        letter-spacing: 2px;
        color: #FFFFFF;
      `}>{data.content}</span>
    </div>

  )
}
