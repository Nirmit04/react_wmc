import { Route, Redirect } from "react-router-dom";
import { routes } from "./routeConstants";

const AuthenticatedRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const tokens: any = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if (tokens && user) {
          return <Component {...props} />;
        } else {
          localStorage.clear();
          return (
            <Redirect
              to={{
                pathname: routes.root,
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
export default AuthenticatedRoute;
