import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Paypal = ({ product, bookingState, bookingPrice }) => {
	const [paidFor, setPaidFor] = useState(false);
	const [error, setError] = useState(null);
	const paypalRef = useRef();
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
	}, [history, bookingState, bookingPrice]);

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions) => {
					return actions.order.create({
						purchase_units: [
							{
								description: product.name,
								amount: {
									currency_code: 'EUR',
									value: product.price,
								},
							},
						],
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					setPaidFor(true);
					handleServer();
					console.log(order);

					if (data.orderID) {
						console.log('%c Order Successfully made!', 'color: yellow');
					}
				},
				onError: (err) => {
					setError(err);
					console.error(err);
				},
			})
			.render(paypalRef.current);
	}, [product.price, product.name, handleServer]);

	if (paidFor) {
		return <div>Successfully Paid</div>;
	}

	return (
		<div>
			<h2 style={{ paddingBottom: '10px' }}>Jetzt bezahlen um die Buchung zu bestätigen:</h2>
			{error && <div>Uh oh, an error occurred! {error.message}</div>}
			<div ref={paypalRef} />
		</div>
	);
};

export default Paypal;
