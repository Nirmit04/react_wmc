import React, { ReactElement } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { routes } from "./routeConstants";
import Private1 from "../modules/private1";
import Private2 from "../modules/private2";
import Private3 from "../modules/private3";
import SideMenu from "./sideNav/sideNav";
import { useDispatch } from "react-redux";
import { clearStore } from "../redux/actions/action";

export default function PrivateRouter(): ReactElement {
  return (
    <div className="router_wrapper">
      <div>
        <SideMenu />
      </div>
      <div className="private_rt">
        <Switch>
          <Route path={routes.private.private1} component={Private1} />
          <Route exact path={routes.private.private2} component={Private2} />
          <Route exact path={routes.private.private3} component={Private3} />
        </Switch>
      </div>
    </div>
  );
}
