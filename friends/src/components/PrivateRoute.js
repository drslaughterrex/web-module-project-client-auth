import React from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component, ...rest }) => {
	if (localStorage.getItem("token")) {
		return <Route component={component} {...rest} />;
	} else {
		return <Redirect to="/login" />;
	}
};

export default PrivateRoute;
