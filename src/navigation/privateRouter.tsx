import React, { ReactElement, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { routes } from "./routeConstants";
import Private1 from "../modules/private1";
import Private2 from "../modules/private2";
import Private3 from "../modules/private3";
import SideMenu from "./sideNav/TopNav";
import { useDispatch, useSelector } from "react-redux";
import { Actions, clearStore } from "../redux/actions/action";
import { IState } from "../redux/reducers";
import StorageService from "../services/storage";
import { Card } from "react-bootstrap";
import {
  PrivateRouteLinks,
  PublicRouteLinks,
} from "../components/allRouteLinks/allRouteLinks";

const storgae = new StorageService();
export default function PrivateRouter(): ReactElement {
  const dispatch = useDispatch();
  const userDetails = useSelector((state: IState) => state.login.userDetails);

  useEffect(() => {
    try {
      if (userDetails) {
        const { id } = userDetails;
        storgae.setStorage("userId", id);
        // RollBarObject.configure({ payload: { person: { id, email, username: fullName } } });
      } else {
        const id = storgae.getStorage("userId");
        if (id) {
          dispatch(Actions.getUserDetails(id));
        }
      }
    } catch (error) {}
  }, [userDetails]);

  return (
    <div className="router_wrapper">
      <div>
        <SideMenu />
      </div>
      <div className="private_rt">
        <Switch>
          <Route
            path={routes.private.dash}
            exact
            component={() => (
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PrivateRouteLinks />
                <PublicRouteLinks />
              </Card>
            )}
          />
          <Route path={routes.private.private1} component={Private1} />
          <Route exact path={routes.private.private2} component={Private2} />
          <Route exact path={routes.private.private3} component={Private3} />
          <Route component={() => <Card>Page not found</Card>} />
        </Switch>
      </div>
    </div>
  );
}
