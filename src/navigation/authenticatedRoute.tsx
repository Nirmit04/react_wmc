import { Route, Redirect } from "react-router-dom";
import StorageService from "../services/storage";
import { routes } from "./routeConstants";
const storgae = new StorageService();
const AuthenticatedRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const tokens: any = JSON.parse(storgae.getStorage("tokens"));
        const user = storgae.getStorage("userId");
        if (tokens.accessToken && tokens.refreshToken && user) {
          return <Component {...props} />;
        } else {
          storgae.clearStorage();
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
