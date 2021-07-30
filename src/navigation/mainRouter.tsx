import React, { ReactElement } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import AuthenticatedRoute from "./authenticatedRoute";
import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";

const MainRouter = (): ReactElement => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <AuthenticatedRoute path="/application" component={PrivateRouter} />
          <PublicRouter />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default MainRouter;
