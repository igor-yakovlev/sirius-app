import cake1 from '../images/cakes/cake1.png';
import cake2 from '../images/cakes/cake2.png';

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
    case  '999':
      return {min: 100, max: 999};
      break;
    default:
      return null
  }
}
function find(array: [], value: number) {
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
      uniqNumArr[i] = rand; // если уникальное, то заисываем его в массив
      i++;
    }
  }
  return uniqNumArr;
}

const randomImage = () => {
  let rand = Math.floor(1 + Math.random() * (2 + 1 - 1));
  switch (rand) {
    case 1:
      return cake1;
      break;
    case  2:
      return cake2;
      break;
    default:
      return null
  }
}


export const getInitialItems = (countSubject: string) => {
  let elemArr = [];
  for (let i = 0; i < +countSubject; i++) {
    elemArr[i] = {id: i, type: 'round'};
  }
  return elemArr;
}

export const getGameItems = (countSubject: string, values: string) => {
  let elemArr = [];
  for (let i = 0; i < +countSubject; i++) {
    const contentUniqValues = randomValue(values, countSubject);
    elemArr[i] = {id: uniqid(), content: contentUniqValues[i], img: randomImage(), type: 'gameElement'};
  }
  return elemArr;
}

export interface RoundItem {
  id: number;
  type: string;
}


export interface GameItem {
  id: string;
  content: number;
  type: string;
  img: {
    blurDataURL: string;
    blurHeight: number;
    blurWidth: number;
    height: number;
    src: string;
    width: number;
  }
}



