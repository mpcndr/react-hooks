import { CounterActionInterface, CounterActionType, CounterState } from "./type";

const initialState: CounterState = {
    counter: 0
};

const counterReducer = (state = initialState, action: CounterActionInterface): CounterState => {
    switch (action.type) {
        case CounterActionType.INCREMENT_COUNTER:
            console.log("INCREMENT_COUNTER : ", state.counter);
            return { ...state, counter: state.counter + 1 }
        case CounterActionType.DECREMENT_COUNTER:
            console.log("DECREMENT_COUNTER");
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};

export default counterReducer;