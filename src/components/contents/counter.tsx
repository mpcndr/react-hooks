import { RootState } from "../../reducers";
import { connect, ConnectedProps } from "react-redux";
import {
  incrementActions,
  decrementActions,
} from "../../reducers/counterReducer/counterActions";
import { StateProps } from "./type";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

const Counter: React.FC<PropsFromRedux> = ({
  counter,
  incrementCounter,
  decrementCounter,
}) => {
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state: RootState): StateProps => {
  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) => {
  return {
    incrementCounter: () => dispatch(incrementActions()),
    decrementCounter: () => dispatch(decrementActions()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Counter);
