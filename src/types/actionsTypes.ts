import {
    CLEAR_FLIPPED_CARDS,
    CLOSE_ALL_CARDS,
    CLOSE_CARD, FINISH_GAME,
    FLIP_CARD, PAIRS_FOUND,
    SET_CARDS,
    SET_FLIPPED_CARD, SET_MODE,
    START_GAME
} from "../redux/const";
import {IGameCard, IStat} from "./reducerTypes";


export interface ISetCards {
    type: typeof SET_CARDS
    payload: IGameCard[]
}

export interface IFlipCard {
    type: typeof FLIP_CARD,
    payload: number
}

export interface ICloseCard {
    type: typeof CLOSE_CARD,
    payload: number
}

export interface ICloseAllCards {
    type: typeof CLOSE_ALL_CARDS
}

export interface ISetFlippedCard {
    type: typeof SET_FLIPPED_CARD,
    payload: IGameCard
}

export interface IClearFlippedCards {
    type: typeof CLEAR_FLIPPED_CARDS
}

export interface IStartGame {
    type: typeof START_GAME
}

export interface IFinishGame {
    type: typeof FINISH_GAME,
    payload: IStat
}

export interface ISetMode {
    type: typeof SET_MODE,
    payload: number
}

export interface IPairsFound {
    type: typeof PAIRS_FOUND,
    payload: number
}



export type AllActionTypes = ISetCards | IFlipCard | ICloseAllCards |
    ISetFlippedCard | IClearFlippedCards | IStartGame | ICloseCard |
    ISetMode | IFinishGame | IPairsFound