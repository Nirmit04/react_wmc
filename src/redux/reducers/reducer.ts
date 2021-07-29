import { actionTypes } from "../actions/actionTypes";

export interface ILoginSuccessResponse {
  id: string;
  fullName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  isVerified: boolean;
  profileURLId: string;
  organization: {
    id: string;
    name: string;
    label: string;
    logoURL: string;
  };
  roles :Array<string>
}

export interface ILoginState {
  loginResponse: ILoginSuccessResponse;
}

const loginInitialState: ILoginState = {
  loginResponse: {
    id: "",
    fullName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    isVerified: false,
    profileURLId: "",
    organization: {
      id: "",
      name: "",
      label: "",
      logoURL: "",
    },
    roles:[]
  },
};

export const login = (
  state = loginInitialState,
  action: { payload: any; type: string }
): ILoginState => {
  switch (action.type) {
    case actionTypes.POST_LOGIN:
      return { ...state, loginResponse: action.payload };

    default:
      return state;
  }
};
export default login;
