import React from "react";
import { Route, Redirect } from "react-router-dom";
import LayoutWrapper from "./../Layout";
// import { getUserId, getUserRole } from '../modules/common/utils';
import { getTokens } from "../modules/common/utils";

export default function PrivateRoute({
  component: Component,
  text = { text },
  ...rest
}) {
  const { accessToken } = getTokens();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (accessToken) {
          return (
            <LayoutWrapper text={text}>
              <Component {...props} />
            </LayoutWrapper>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}
