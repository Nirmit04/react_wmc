import "./TopNav.scss";
import React, { ReactElement, useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import StorageService from "../../services/storage";
import { InternalRoutingUrls } from "./InternalRoutingUrls";
import { useDispatch } from "react-redux";
import { clearStore } from "../../redux/actions/action";
import { routes } from "../routeConstants";
import logo11122 from "../../assets/logo11122.png";
import storage from "../../services/storage";
export interface SideMenuState {
  allRoutes: {
    private1: boolean;
    private2: boolean;
    private3: boolean;
  };
}

export default function TopNav(): ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();
  const logOut = () => {
    storage.clearStorage();
    history.push("/");
    dispatch(clearStore());
  };
  return (
    <React.Fragment>
      <div className="sideNav">
        <img
          className="logo1121"
          src={logo11122}
          onClick={() => history.push(routes.private.dash)}
        ></img>
        <div className="private_links">
          <NavLink
            to={InternalRoutingUrls.private1}
            className="nav__list"
            activeClassName="active"
          >
            Private Route 1
          </NavLink>
          <NavLink
            to={InternalRoutingUrls.private2}
            className="nav__list"
            activeClassName="active"
          >
            Private Route 2
          </NavLink>
          <NavLink
            to={InternalRoutingUrls.private3}
            className="nav__list"
            activeClassName="active"
          >
            Private Route 3
          </NavLink>
          <button onClick={() => logOut()} className="logout">
            LogOut
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
