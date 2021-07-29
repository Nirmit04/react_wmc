import { combineReducers } from "redux";
import loginReducer, { ILoginState } from "./reducer";

export interface IState {
  login: ILoginState;
}

const appReducer = combineReducers({
  login: loginReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
export default rootReducer;
