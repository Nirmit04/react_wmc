import { Route, Redirect } from "react-router-dom";
import storage from "../services/storage";
import { routes } from "./routeConstants";
const AuthenticatedRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const tokens = storage.getStorage("tokens");
        const user = storage.getStorage("userId");
        if (tokens && user) {
          return <Component {...props} />;
        } else {
          storage.clearStorage();
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
