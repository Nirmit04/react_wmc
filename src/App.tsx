import React, { useState } from "react";
import "./styles.scss";
import LoginForm from "./login/LoginForm";
import MainRouter from "./navigation/mainRouter";

const App = () => {
  return (
    <React.Fragment>
      <MainRouter />
    </React.Fragment>
  );
};
export default App;
