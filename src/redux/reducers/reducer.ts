import { actionTypes } from "../actions/actionTypes";

export interface UserDetails {
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
  roles: Array<string>;
}

export interface ILoginState {
  userDetails: UserDetails;
}

const loginInitialState: ILoginState = {
  userDetails: null,
};

export const login = (
  state = loginInitialState,
  action: { payload: any; type: string }
): ILoginState => {
  switch (action.type) {
    case actionTypes.USER_DETAILS:
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};
export default login;
