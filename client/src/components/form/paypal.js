import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { Spinner } from './booking-form.styles';

const Paypal = ({ product, bookingState, bookingPrice }) => {
	const [error, setError] = useState(null);
	const history = useHistory();

	const handleServer = useCallback(async () => {
		const res = await axios.post('/api/event', {
			data: bookingState,
			price: bookingPrice,
		});
		if (res) {
			history.push('/landing', { details: bookingState });
		}
		// confirmation Mail
		axios
			.post('/api/mail/confirmation', { data: bookingState, price: bookingPrice })
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		// booking Mail
		axios
			.post('/api/mail/booking', { data: bookingState, price: bookingPrice })
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		// add to database
		axios
			.post('/api/history', {
				name: bookingState.name,
				email: bookingState.email,
				price: bookingPrice,
				bookingDate: `${bookingState.arrivalDate} - ${bookingState.departureDate}`,
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	}, [history, bookingState, bookingPrice]);

	const [{ isPending }] = usePayPalScriptReducer();
	return (
		<div>
			<div>
				<h2 style={{ paddingBottom: '10px' }}>Jetzt bezahlen um die Buchung zu bestätigen:</h2>
				{error && <div>Uh oh, an error occurred! {error.message}</div>}
				{isPending ? (
					<Spinner>
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>
					</Spinner>
				) : null}
				<PayPalButtons
					createOrder={(data, actions) => {
						return actions.order.create({
							purchase_units: [
								{
									description: product.name,
									amount: {
										currency: 'EUR',
										value: product.price,
									},
								},
							],
						});
					}}
					onApprove={(data, actions) => {
						return actions.order.capture().then((details) => {
							handleServer();
							console.log(details);

							if (data.orderID) {
								console.log('%c Order Successfully made!', 'color: yellow');
							} else {
								setError(true);
							}
						});
					}}
				/>
			</div>
		</div>
	);
};

export default Paypal;
