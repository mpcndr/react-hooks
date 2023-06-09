export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_MESSAGE = 'SET_MESSAGE'

export interface AppState {
  counter: number;
  message: string;
}

export enum AppActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  SET_MESSAGE = 'SET_MESSAGE',
}

export type AppAction = | { type: typeof INCREMENT; payload: number }
  | { type: typeof DECREMENT; payload: number }
  | { type: typeof SET_MESSAGE; payload: string };