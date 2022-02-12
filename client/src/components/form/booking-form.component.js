import React, { useEffect, useState, useRef } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { default as RadioButton } from './forms-ui/radio-button.component';
import { default as Button } from './forms-ui/submit-button.component';
import ReactDatePicker from './forms-ui/date-picker.component';
import TextInput from './forms-ui/textfield.component';
import { default as Select } from './forms-ui/select.component';
import { Container, FormTitle, FormWrapper, BackButton } from './booking-form.styles';
import Paypal from '../../components/form/paypal';
// import ReactDOM from 'react-dom';

const FORM_VALIDATION = Yup.object().shape({
	name: Yup.string().required('Required'),
	email: Yup.string().required('Required').email('Bitte richtige Mail angeben.'),
	phone: Yup.number('Bitte eine Nummer angeben.')
		.positive('Die Nummer muss positive sein.')
		.min(10000, 'Die Nummer muss mind. 6-stellig sein.')
		.typeError('Bitte eine Nummer angeben.')
		.required('Required'),
	person: Yup.string().required('Required'),
	child: Yup.string().required('Required'),
	dog: Yup.string().required('Required'),
	arrivalDate: Yup.date().required('Required').nullable(),
	departureDate: Yup.date()
		.required('Required')
		.nullable()
		.min(Yup.ref('arrivalDate'), 'Das Abreisedatum muss höher sein als das Anreisedatum.'),
	// .when(
	// 	'arrivalDate',
	// 	(arrivalDate, schema) =>
	// 		arrivalDate && schema.min(arrivalDate, 'Expiry date must be greater than issue date')
	// ),
	color: Yup.string().required('Required'),
	type: Yup.string(),
	// termsOfService: Yup.boolean()
	// 	.oneOf([true], 'The terms and conditions must be accepted.')
	// 	.required('The terms and conditions must be accepted.'),
});

const BookingForm = ({ hausboot, booked, floß }) => {
	const date = new Date();
	date.setDate(date.getDate() + 1);
	const INITIAL_FORM_STATE = {
		name: '',
		email: '',
		phone: '',
		person: '1',
		child: '0',
		dog: '0',
		arrivalDate: new Date(),
		departureDate: date,
		color: hausboot,
		type: 'Floß S',
		// termsOfService: false,
	};
	const [state, setState] = useState(INITIAL_FORM_STATE);
	const [checkout, setCheckout] = useState(false);
	const [bookingPrice, setbookingPrice] = useState(0);

	const product = {
		price: bookingPrice / 2,
		name: 'Hausboot Buchen',
	};

	// get the range between start and end date
	const getDaysArray = function (start, end) {
		for (var arr = [], dt = new Date(start); dt <= end - 1; dt.setDate(dt.getDate() + 1)) {
			arr.push(new Date(dt));
		}
		return arr;
	};
	const paymentRef = useRef();
	const goToPayment = () => {
		paymentRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	useEffect(() => {
		const daysBetween = getDaysArray(state.arrivalDate, state.departureDate);
		const weekEnd = daysBetween.filter((day) => [0, 5, 6].includes(day.getDay()));
		const week = daysBetween.filter((day) => ![0, 5, 6].includes(day.getDay()));
		const Season = () => {
			if (
				new Date('2022-05-23') <= state.arrivalDate &&
				new Date('2022-09-10') >= state.departureDate
			) {
				return 'Hauptsaison';
			} else {
				return 'Nebensaison';
			}
		};
		// Wochen Preis
		if (Math.round((state.departureDate - state.arrivalDate) / (1000 * 60 * 60 * 24)) === 7) {
			if (floß) {
				setbookingPrice(750);
			} else {
				if (Season === 'Nebensaison') {
					setbookingPrice(790);
				} else {
					setbookingPrice(1270);
				}
			}
		}
		// Wochenend Preis
		else if (
			Math.round((state.departureDate - state.arrivalDate) / (1000 * 60 * 60 * 24)) <= 3 &&
			state.arrivalDate.getDay() === 5 &&
			state.departureDate.getDay() === 0
		) {
			if (floß) {
				setbookingPrice(450);
			} else {
				if (Season === 'Nebensaison') {
					setbookingPrice(440);
				} else {
					setbookingPrice(610);
				}
			}
		}
		// Tages Preis
		else {
			if (floß) {
				setbookingPrice(250 * weekEnd.length + 200 * week.length);
			} else {
				if (Season === 'Nebensaison') {
					setbookingPrice(160 * weekEnd.length + 140 * week.length);
				} else {
					setbookingPrice(230 * weekEnd.length + 200 * week.length);
				}
			}
		}
	}, [state.arrivalDate, state.departureDate, floß]);
	return (
		<Container>
			<FormWrapper>
				{checkout && state.arrivalDate.getDate() !== state.departureDate.getDate() ? (
					<React.Fragment>
						<h2 ref={paymentRef}>50% Anzahlung: {bookingPrice / 2} €</h2>
						<Paypal product={product} bookingState={state} />
						<BackButton fontBig primary onClick={() => setCheckout(false)}>
							Zurück
						</BackButton>
					</React.Fragment>
				) : (
					<React.Fragment>
						<FormTitle>
							{hausboot === 'Floß'
								? 'Jetzt Floßboot buchen:'
								: `Jetzt Hausboot ${hausboot} buchen:`}
						</FormTitle>
						<Formik
							initialValues={{
								...INITIAL_FORM_STATE,
							}}
							validationSchema={FORM_VALIDATION}
							onSubmit={(values) => {
								console.log(values);
								setState(values);
								setCheckout(true);
								goToPayment();
							}}
						>
							<Form>
								<TextInput name="name" label="Name" type="text" />
								<TextInput name="email" label="E-Mail" type="email" />
								<TextInput name="phone" label="Telefon" type="tel" />
								<Select name="person" options={[1, 2, 3, 4, 5]} label="Erwachsene" />
								<Select name="child" options={[0, 1, 2, 3, 4, 5]} label="Kinder" />
								<Select name="dog" options={[0, 1, 2, 3]} label="Hund" />
								<ReactDatePicker name="arrivalDate" name2="departureDate" booked={booked} />
								<RadioButton
									name="color"
									options={['Rot', 'Blau', 'Floß']}
									label="Hausboot"
									disabled
								/>
								{floß && (
									<RadioButton name="type" options={['Floß S', 'Floß L']} label="Floßboot" />
								)}
								<Button>Buchen</Button>
							</Form>
						</Formik>
					</React.Fragment>
				)}
			</FormWrapper>
		</Container>
	);
};

export default BookingForm;
