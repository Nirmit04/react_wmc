import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routeConstants";
import Private1 from "../modules/private1";
import Private2 from "../modules/private2";
import Private3 from "../modules/private3";

export default function PrivateRouter(): ReactElement {
  const getAllowedRoutes = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      return;
    }
    return [
      routes.private.private1,
      routes.private.private2,
      routes.private.private3,
    ];
  };

  return (
    <div>
      {getAllowedRoutes()?.includes(window.location.pathname) ? (
        <div>
          {/* Call navbar */}
          <Switch>
            <Route exact path={routes.private.private1} component={Private1} />
            <Route exact path={routes.private.private2} component={Private2} />
            <Route exact path={routes.private.private3} component={Private3} />
          </Switch>
        </div>
      ) : (
        <Route component={() => <div>Private Router Not Found</div>} />
      )}
    </div>
  );
}
