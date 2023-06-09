import { AppAction, AppState, DECREMENT, INCREMENT, SET_MESSAGE } from "./type";

const initialState: AppState = {
    counter: 0,
    message: ''
};

const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + action.payload }
        case DECREMENT:
            return { ...state, counter: state.counter - action.payload };
        case SET_MESSAGE:
            return { ...state, message: action.payload };
        default:
            return state;
    }
};

export default appReducer;