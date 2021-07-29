import React, { ReactElement } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { routes } from "./routeConstants";
import Public1 from "../modules/public1";
import Public2 from "../modules/public2";
import Public3 from "../modules/public3";

export default function PublicRouter(): ReactElement {
  const history = useHistory();
  const login = () => {
    return (
      <>
        <button onClick={() => history.push({ pathname: "/private1" })}>
          go to private route
        </button>
      </>
    );
  };

  return (
    <Switch>
      <Route exact path={routes.root} component={login} />
      <Route exact path={routes.public.public1} component={Public1} />
      <Route exact path={routes.public.public2} component={Public2} />
      <Route exact path={routes.public.public3} component={Public3} />
    </Switch>
  );
}
