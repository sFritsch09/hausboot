import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDarkMode } from '../../components/hooks/DarkModeContext';
import axios from 'axios';
import { HistoryContainer } from './history.styles';

const History = () => {
	const isDarkMode = useDarkMode();
	const theme = createTheme({
		palette: {
			mode: isDarkMode ? 'dark' : 'light',
		},
	});
	const [bookings, setBookings] = useState([]);
	useEffect(() => {
		const getBookings = async () => {
			try {
				const res = await axios.get('/api/history');
				if (res.status === 200) {
					setBookings(res.data.payload);
					return res.data.payload;
				}
			} catch (err) {
				console.error(err);
			}
		};
		getBookings();
	}, [setBookings]);
	return (
		<div className="main">
			<HistoryContainer>
				<h1>History</h1>
				<ThemeProvider theme={theme}>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>ID</TableCell>
									<TableCell align="right">Name</TableCell>
									<TableCell align="right">Email</TableCell>
									<TableCell align="right">Preis</TableCell>
									<TableCell align="right">Datum</TableCell>
									<TableCell align="right">Last Update</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{bookings.map((row) => (
									<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component="th" scope="row">
											{row.id}
										</TableCell>
										<TableCell align="right">{row.name}</TableCell>
										<TableCell align="right">{row.email}</TableCell>
										<TableCell align="right">{row.price} €</TableCell>
										<TableCell align="right">
											{new Date(row.created_at).toLocaleDateString('de-DE', {
												year: 'numeric',
												month: '2-digit',
												day: '2-digit',
											})}
										</TableCell>
										<TableCell align="right">
											{new Date(row.updated_at).toLocaleDateString('de-DE', {
												year: 'numeric',
												month: '2-digit',
												day: '2-digit',
											})}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</ThemeProvider>
			</HistoryContainer>
		</div>
	);
};

export default History;
