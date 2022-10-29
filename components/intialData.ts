import cake1 from '../images/cakes/cake1.png';
import cake2 from '../images/cakes/cake2.png';

const initialData = {
  cakes: {
    "cake-1": {id: 'cake-1', content: 42 , img: cake1},
    "cake-2": {id: 'cake-2', content: 32},
    "cake-3": {id: 'cake-3', content: 22},
    "cake-4": {id: 'cake-4', content: 12}
  }
}

import type { CSSProperties, FC } from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

const style: CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

interface BoxProps {
  name: string
}

interface DragItem {
  name: string
}
export const Box: FC<BoxProps> = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { name },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult<DragItem>()
        if (item && dropResult) {
          alert(`You dropped ${item.name} into ${dropResult.name}!`)
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [name],
  )
  const opacity = isDragging ? 0.4 : 1

  return (
    <div ref={drag} style={{ ...style, opacity }}>
  {name}
  </div>
)
}
