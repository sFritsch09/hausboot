import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from './components/hooks/AuthContext';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
	const { auth } = useContext(authContext);
	const isAuth = () => {
		const privateAuth = {
			username: process.env.REACT_APP_USERNAME,
			password: process.env.REACT_APP_PASSWORD,
			admin: process.env.REACT_APP_ADMIN,
			adminPassword: process.env.REACT_APP_ADMINPASSWORD,
		};
		if (
			auth?.username === (privateAuth.username || privateAuth.admin) &&
			auth?.password === (privateAuth.password || privateAuth.adminPassword)
		) {
			return true;
		}
		return false;
	};
	return (
		<Route
			path={path}
			{...rest}
			render={(routeProps) => (isAuth() ? <Component {...routeProps} /> : <Redirect to="/login" />)}
		/>
	);
};

export default PrivateRoute;
