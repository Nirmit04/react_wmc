import axios from "axios";
import storage from "../../services/storage";
import { actionTypes } from "./actionTypes";


export const clearStore = () => {
  return (dispatch: any) => {
    dispatch({ type: actionTypes.CLEAR_STORE });
  };
};

const postLoginDetails = (data: any): any => {
  return async (dispatch: any) => {
    let p = await axios.post("https://demo7951933.mockable.io/login", data);
    storage.setStorage(
      "tokens",
      JSON.stringify({
        accessToken: p.data.data.accessToken,
        refreshToken: p.data.data.refreshToken
      })
    );
    dispatch({ type: actionTypes.USER_DETAILS, payload: p.data.data.user });
  };
};
const getUserDetails = (id: string): any => {
  return async (dispatch: any) => {
    let p = await axios.get("https://demo7951933.mockable.io/getUser");
    dispatch({ type: actionTypes.USER_DETAILS, payload: p.data.data.user });
  };
};

export const Actions = { postLoginDetails, getUserDetails };
