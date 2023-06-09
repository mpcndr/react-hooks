import { TodoState, TodoActionType, TodoActionInterface } from "./type";

const initialState: TodoState = {
    todo: [],
};

export function todoReducer(state = initialState, action: TodoActionInterface): TodoState {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            return { todo: [...state.todo, action.payload] };
        case TodoActionType.DELETE_TODO:
            return { todo: state.todo.filter((todo, index) => index !== action.payload) };
        case TodoActionType.CHECK_TODO:
            return {
                todo: state.todo.map((todo, index) =>
                    index === action.payload ? { todo: todo.todo, isCheck: !todo.isCheck } : todo
                ),
            };
        default:
            return state;
    }
}