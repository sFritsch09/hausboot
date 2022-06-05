import { Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import GlobalStyle, { theme, invertTheme } from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/hooks/DarkModeContext';
import AuthProvider from './components/hooks/AuthContext';

import NavBar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/homepage.component';
import HausbootRot from './pages/hausboot-rot/hausboot-rot.component';
import HausbootBlau from './pages/hausboot-blau/hausboot-blau.component';
import Floßboot from './pages/floßboot/floßboot.component';
import Booking from './pages/booking/booking.component';
import ContactPage from './pages/contact/contact.component';
import Impressum from './pages/impressum/impressum.component';
import LandingPage from './pages/landing/landing.component';
import PhotoGallery from 'pages/gallery/photoGallery.component';
import About from 'pages/about/about.component';
import Trips from 'pages/trips/trips.component';
import History from 'pages/history/history.component';
import PrivateRoute from './PrivateRoute';
import Login from 'pages/login/login.component';

function App() {
	const isDarkMode = useDarkMode();
	useEffect(() => {
		localStorage.setItem('theme', isDarkMode);
	}, [isDarkMode]);
	return (
		<div className="page-container">
			<ThemeProvider theme={isDarkMode ? theme : invertTheme}>
				<div className="content-wrap">
					<NavBar />
					<GlobalStyle />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/hausboot-rot" component={HausbootRot} />
						<Route path="/hausboot-blau" component={HausbootBlau} />
						<Route path="/floßboot" component={Floßboot} />
						<Route path="/trips" component={Trips} />
						<Route path="/booking" component={Booking} />
						<Route path="/landing" component={LandingPage} />
						<Route path="/contact" component={ContactPage} />
						<Route path="/impressum" component={Impressum} />
						<Route path="/gallery" component={PhotoGallery} />
						<Route path="/about" component={About} />
						<AuthProvider>
							<Route path="/login" component={Login} />
							<PrivateRoute path="/history" component={History} />
						</AuthProvider>
					</Switch>
				</div>
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
