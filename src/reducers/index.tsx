import { combineReducers } from "redux";
import counterReducer from "./counterReducer/counterReducer";
import appReducer from "./appReducer/appReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  app: appReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

