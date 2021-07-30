import React, { ReactElement } from "react";
import { NavLink, Link } from "react-router-dom";
import { routes } from "../../navigation/routeConstants";

interface Props {}

export function PublicRouteLinks({}: Props): ReactElement {
  return (
    <>
      <div className="public_routes">
        <NavLink activeClassName="active" to={routes.public.public1}>
          Public 1
        </NavLink>
        <NavLink activeClassName="active" to={routes.public.public2}>
          Public 2
        </NavLink>
        <NavLink activeClassName="active" to={routes.public.public3}>
          Public 3
        </NavLink>
      </div>
    </>
  );
}

export function PrivateRouteLinks({}: Props): ReactElement {
  return (
    <div className="private_routes">
      <Link to={routes.private.private1}>Private 1</Link>
      <Link to={routes.private.private2}>Private 2</Link>
      <Link to={routes.private.private3}>Private 3</Link>
    </div>
  );
}
