import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthScreen = ({ element: Element }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Link to="/login" />;
            }

            if (isAdmin === true && user.role !== "admin") {
              return <Link to="/login" />;
            }

            return <Element {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default AuthScreen;
