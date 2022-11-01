import { StaticImageData } from "next/image";

export interface RoundItem {
  id: number;
  type: string;
}


export interface GameItem {
  id: string;
  content: number;
  type: string;
  img: StaticImageData | null
}

export type GameArray = Array<GameItem | RoundItem>;


