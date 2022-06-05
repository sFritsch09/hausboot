import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from './components/hooks/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { auth } = useContext(authContext);
	const isAuth = () => {
		const privateAuth = {
			username: process.env.REACT_APP_USERNAME,
			password: process.env.REACT_APP_PASSWORD,
		};
		if (auth?.username === privateAuth.username && auth?.password === privateAuth.password) {
			return true;
		}
		return false;
	};
	return (
		<Route
			{...rest}
			render={(routeProps) => (isAuth() ? <Component {...routeProps} /> : <Redirect to="/login" />)}
		/>
	);
};

export default PrivateRoute;
