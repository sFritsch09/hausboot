import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDarkMode } from '../../components/hooks/DarkModeContext';
import { authContext } from '../../components/hooks/AuthContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoginCard, LoginContainer } from './login.styles';

const Login = () => {
	const isDarkMode = useDarkMode();
	const history = useHistory();
	const theme = createTheme({
		palette: {
			mode: isDarkMode ? 'dark' : 'light',
		},
	});
	const { setAuthData } = useContext(authContext);
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = () => {
		const data = {
			username: name,
			password: password,
		};
		setAuthData(data);
		if (name === 'Carsten') {
			history.push('/carsten');
		} else {
			history.push('/history');
		}
	};

	return (
		<div className="main">
			<LoginContainer>
				Login
				<ThemeProvider theme={theme}>
					<form onSubmit={handleSubmit}>
						<LoginCard>
							<div>
								<TextField
									label="Username"
									variant="outlined"
									size="small"
									value={name}
									onChange={(e) => setName(e.target.value)}
									autoFocus
								/>
							</div>
							<div>
								<TextField
									label="Password"
									variant="outlined"
									size="small"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div>
								<Button variant="contained" type="submit">
									Login
								</Button>
							</div>
						</LoginCard>
					</form>
				</ThemeProvider>
			</LoginContainer>
		</div>
	);
};

export default Login;
