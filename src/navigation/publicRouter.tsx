import React, { ReactElement } from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { routes } from "./routeConstants";
import Public1 from "../modules/public1";
import Public2 from "../modules/public2";
import Public3 from "../modules/public3";
import LoginForm from "../login/LoginForm";
import Card from "../components/atoms/card/card";

export default function PublicRouter(): ReactElement {
  return (
    <div className="router_wrapper public_rt">
      <div>
        <Switch>
          <Route exact path={routes.root} component={LoginForm} />
          <Route exact path={routes.public.public1} component={Public1} />
          <Route exact path={routes.public.public2} component={Public2} />
          <Route exact path={routes.public.public3} component={Public3} />
          <Route component={() => <Card>Page not found</Card>} />
        </Switch>
      </div>
    </div>
  );
}
