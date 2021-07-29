import axios from "axios";
import { actionTypes } from "./actionTypes";

export const clearStore = () => {
  return (dispatch: any) => {
    dispatch({ type: actionTypes.CLEAR_STORE });
  };
};

const postLoginDetails = (data: any): any => {
  return (dispatch: any) => {
    axios
      .post("https://watch-me-code.free.beeceptor.com/login", data)
      .then((response: any) =>
        dispatch({ type: actionTypes.POST_LOGIN, payload: response.data })
      );
  };
};

export default postLoginDetails;
