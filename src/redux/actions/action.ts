import axios from "axios";
import { actionTypes } from "./actionTypes";

export const clearStore = () => {
  return (dispatch: any) => {
    dispatch({ type: actionTypes.CLEAR_STORE });
  };
};

const postLoginDetails = (data: any): any => {
  return async (dispatch: any) => {
    let p = await axios.post("https://demo7951933.mockable.io/login", data);
    dispatch({ type: actionTypes.POST_LOGIN, payload: p.data.data })
  };
};

export default postLoginDetails;
