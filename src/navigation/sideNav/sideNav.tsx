import "./SideMenu.scss";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import StorageService from "../../services/storage";
import { InternalRoutingUrls } from "./InternalRoutingUrls";

export interface SideMenuState {
    allRoutes: {
        private1: boolean,
        private2: boolean
        private3: boolean
    };
}


const storageService = new StorageService();
export default function SideMenu(): ReactElement {
    const [state, setstate] = useState<SideMenuState>({
        allRoutes: {
            private1: false,
            private2: false,
            private3: false
        }
    });

    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        setActiveRoute(currentPath);
    }, [location]);

    const setActiveRoute = (pathName: string) => {
        let allRoutes = { ...state.allRoutes };
        for (let key in allRoutes) {
            allRoutes[key] = false;
        }
        switch (pathName) {
            case InternalRoutingUrls.private1:
                allRoutes.private1 = true;
                break;
            case InternalRoutingUrls.private2:
                allRoutes.private2 = true;
                break;
            case InternalRoutingUrls.private3:
                allRoutes.private3 = true;
                break;
        }
        setstate((prevState) => {
            return { ...prevState, allRoutes: allRoutes };
        });
    };

    return (
        <React.Fragment>
            <ul>
                <Link to={InternalRoutingUrls.private1} id="reports" className={`nav__list${state.allRoutes.private1 ? " active" : ""}`}>
                    Private Route 1
                </Link>
                <Link to={InternalRoutingUrls.private2} id="schedule" className={`nav__list list-wrap${state.allRoutes.private2 ? " active" : ""}`}>
                    Private Route 2
                </Link>
                <Link to={InternalRoutingUrls.private3} id="buyTest" className={`nav__list${state.allRoutes.private3 ? " active" : ""}`}>
                    Private Route 3
                </Link>
            </ul>
        </React.Fragment>
    );
}
