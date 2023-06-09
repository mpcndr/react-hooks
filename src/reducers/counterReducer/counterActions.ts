import { AnyAction, Dispatch } from "redux";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./type";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";

export const incrementActions = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch: Dispatch, getState: () => RootState) => {
        dispatch({ type: INCREMENT_COUNTER })
    };
};

export const decrementActions = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: DECREMENT_COUNTER })
    };
};