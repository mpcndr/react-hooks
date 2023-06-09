import { AnyAction, Dispatch } from "redux";
import { DECREMENT, INCREMENT, SET_MESSAGE } from "./type";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";

export const incrementActions = (num: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch: Dispatch, getState: () => RootState) => {
        console.log(getState());
        dispatch({ type: INCREMENT, payload: num })
    };
};

export const decrementActions = (num: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch: Dispatch, getState: () => RootState) => {
        dispatch({ type: DECREMENT, payload: num })
    };
};

export const messageActions = (msg: string): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch: Dispatch, getState: () => RootState) => {
        dispatch({ type: SET_MESSAGE, payload: msg })
    };
};