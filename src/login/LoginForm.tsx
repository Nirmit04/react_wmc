import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { routes } from "../navigation/routeConstants";
import { useDispatch, useSelector } from "react-redux";
import postLoginDetails from "../redux/actions/action";
import { ILoginState } from "../redux/reducers/reducer";
import { IState } from "../redux/reducers";
import StorageService from "../services/storage";

interface loginProps {
  showLogin: boolean;
}
const storage = new StorageService();
const LoginForm = (props: loginProps) => {
  const [error, setError] = useState("");
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  const loginDetails = useSelector(
    (state: IState) => state.login.loginResponse
  );

  const submitFormData = (event: any) => {
    if (event) {
      event.preventDefault();
    }

    if (formDetails.email && isValid(formDetails.email)) {
      // Send the data or store it in session storage
      dispatch(postLoginDetails({ name: "gadsgsa" }));
      setError("");
    }
  };

  useEffect(() => {
    if (loginDetails && loginDetails !== {}) {
      console.log(loginDetails);
      
      storage.setStorage("tokens", JSON.stringify({ accessToken: loginDetails.accessToken, refreshToken: loginDetails.refreshToken }));
      storage.setStorage("userId", loginDetails.user.id);
      history.push(routes.private.private1);
    }
  }, [loginDetails]);

  const handleChange = (evt: any) => {
    setFormDetails((formDetails) => ({
      ...formDetails,
      [evt.target.name]: evt.target.value,
    }));
  };

  const isValid = (email: any) => {
    let error;
    if (!isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (error) {
      setError(error);

      return false;
    }

    return true;
  };

  const isEmail = (email: any) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  };

  return (
    <div className={`${props.showLogin}` ? "active" : ""}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text"> Sign In </h1>
            <label>Email</label>
            <br></br>
            <input
              type="text"
              name="email"
              className={"login-box" + (error && "has-error")}
              placeholder="Enter email addresses"
              value={formDetails.email}
              onChange={handleChange}
            />
            {error && <p className="error">{error}</p>}
            <br></br>
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="password"
              onChange={handleChange}
            />
            <br></br>
            <input
              type="submit"
              value="LOGIN"
              className="login-btn"
              onClick={submitFormData}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
