import { RootState } from "../../reducers";
import { connect, ConnectedProps } from "react-redux";
import {
  incrementActions,
  decrementActions,
  messageActions,
} from "../../reducers/appReducer/appActions";
import { StateProps } from "./type";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useEffect } from "react";

const Application: React.FC<PropsFromRedux> = ({
  counter,
  message,
  increment,
  decrement,
  setMessage,
}) => {
  useEffect(() => {
    if (counter > 20) {
      setMessage(`you click = ${counter}`);
    } else {
      setMessage("");
    }
  }, [counter, setMessage]);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => increment(2)}>Increment + 2</button>
      <button onClick={() => increment(4)}>Increment + 4</button>
      <button onClick={() => decrement(2)}>Decrement -2</button>
      <button onClick={() => decrement(4)}>Decrement -4</button>
      <p>Message: {message}</p>
    </div>
  );
};
const mapStateToProps = (state: RootState): StateProps => {
  return {
    counter: state.app.counter,
    message: state.app.message,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) => {
  return {
    increment: (num: number) => dispatch(incrementActions(num)),
    decrement: (num: number) => dispatch(decrementActions(num)),
    setMessage: (msg: string) => dispatch(messageActions(msg)),
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Application);
