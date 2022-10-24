import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeProvider } from './components/hooks/DarkModeContext';
import ScrollToTop from 'components/scrollToTop.component';
import FontStyles from './fontStyles';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<FontStyles />
			<ScrollToTop />
			<DarkModeProvider>
				<App />
			</DarkModeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
serviceWorkerRegistration.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
