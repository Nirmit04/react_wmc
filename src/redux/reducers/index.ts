import { combineReducers } from "redux";
import { actionTypes } from "../actions/actionTypes";
import loginReducer, { ILoginState } from "./reducer";

export interface IState {
  login: ILoginState;
}

const appReducer = combineReducers({
  login: loginReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === actionTypes.CLEAR_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
