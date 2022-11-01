import cake1 from '../../images/cakes/cake1.svg';
import cake2 from '../../images/cakes/cake2.svg';
import cake3 from '../../images/cakes/cake3.svg';
import backgroundImage1 from '../../images/background-game1.jpg'
import backgroundImage2 from '../../images/background-game2.jpg'
import backgroundImage3 from '../../images/background-game3.jpg'
import nextId from "react-id-generator";
import { StaticImageData } from "next/image";


const getRangeValue = (value: string) => {
  switch (value) {
    case '9':
      return {min: 1, max: 9};
      break;
    case  '19':
      return {min: 10, max: 19};
      break;
    case  '50':
      return {min: 20, max: 50};
      break;
    case  '99':
      return {min: 51, max: 99};
      break;
    default:
      return {min: 100, max: 999};
  }
}
function find(array: number[], value: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) return 1;
  }
  return 0;
}

const randomValue = (value: string, countSubject: string) => {
  const {min, max} = getRangeValue(value);
  let uniqNumArr = [];
  let i = 0;
  while (i < +countSubject) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    if (find(uniqNumArr, rand) === 0) {
      uniqNumArr[i] = rand;
      i++;
    }
  }
  return uniqNumArr;
}

const randomImage = () => {
  let rand = Math.floor(1 + Math.random() * (3 + 1 - 1));
  switch (rand) {
    case 1:
      return cake1;
      break;
    case  2:
      return cake2;
      break;
    case  3:
      return cake3;
      break;
    default:
      return null
  }
}

export const randomTheme = () => {
  let rand = Math.floor(1 + Math.random() * (3 + 1 - 1));
  switch (rand) {
    case 1:
      return backgroundImage1;
      break;
    case  2:
      return backgroundImage2;
      break;
    case  3:
      return backgroundImage3;
      break;
    default:
      return backgroundImage3
  }
}


export const getInitialItems = (countSubject: string | string[]) => {
  let elemArr = [];
  for (let i = 0; i < +countSubject; i++) {
    elemArr[i] = {id: i, type: 'round'};
  }
  return elemArr;
}

export const getGameItems = (countSubject: string | string[] | undefined, values: string | string[] | undefined) => {
  let elemArr = [];
  const contentUniqValues = randomValue(values as string, countSubject as string);
  for (let i = 0; i < +countSubject!; i++) {
    elemArr[i] = {id: nextId(), content: contentUniqValues[i], img: randomImage(), type: 'gameElement'};
  }
  return elemArr;
}
