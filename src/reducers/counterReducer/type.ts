const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export interface CounterState {
    counter: number;
}

export enum CounterActionType {
    INCREMENT_COUNTER = "INCREMENT_COUNTER",
    DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

export type CounterAction = CounterActionType;

export interface CounterActionInterface {
    type: CounterAction;
    payload: any;
}

export interface IncrementAction {
    type: typeof INCREMENT;
}

export interface DecrementAction {
    type: typeof DECREMENT;
}

export type CounterActionTypes = IncrementAction | DecrementAction;