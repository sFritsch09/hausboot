import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { default as RadioButton } from './forms-ui/radio-button.component';
import { default as Button } from './forms-ui/submit-button.component';
import ReactDatePicker from './forms-ui/date-picker.component';
import TextInput from './forms-ui/textfield.component';
import { default as Select } from './forms-ui/select.component';
import { default as CheckBox } from './forms-ui/checkbox.component';
import { Container, FormTitle, FormWrapper } from './booking-form.styles';
import { useCallback } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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
	color: Yup.string().required('Required'),
	type: Yup.string(),
	// termsOfService: Yup.boolean()
	// 	.oneOf([true], 'The terms and conditions must be accepted.')
	// 	.required('The terms and conditions must be accepted.'),
});

const FORM_VALIDATION2 = Yup.object().shape({
	name: Yup.string().required('Required'),
	email: Yup.string().required('Required').email('Bitte richtige Mail angeben.'),
	phone: Yup.number('Bitte eine Nummer angeben.')
		.positive('Die Nummer muss positive sein.')
		.min(10000, 'Die Nummer muss mind. 6-stellig sein.')
		.typeError('Bitte eine Nummer angeben.')
		.required('Required'),
	// person: Yup.string().required('Required'),
	// child: Yup.string().required('Required'),
	dog: Yup.string().required('Required'),
	arrivalDate: Yup.date().required('Required'),
	departureDate: Yup.date(),
	color: Yup.string().required('Required'),
	type: Yup.string(),
	dayOnly: Yup.boolean(),
});

const BookingEntry = () => {
	const history = useHistory();
	const [bookingPrice, setbookingPrice] = useState(0);
	const [oneDay, setOneDay] = useState(false);
	const [floß, setFloß] = useState(false);
	const date = new Date();
	date.setDate(date.getDate() + 1);
	const INITIAL_FORM_STATE = {
		name: '',
		email: '',
		phone: '',
		person: '',
		child: '0',
		dog: '0',
		arrivalDate: new Date(),
		departureDate: date,
		color: '',
		type: '',
		dayOnly: false,
		floß: false,
	};
	const [state, setState] = useState(INITIAL_FORM_STATE);
	// API call
	const handleServer = useCallback(
		async (state) => {
			const res = await axios.post('/api/event', {
				data: state,
				price: bookingPrice,
			});
			if (res) {
				history.push('/landing', { details: state });
			}
			// confirmation Mail
			axios
				.post('/api/mail/confirmation', { data: state, price: bookingPrice })
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err));
			// booking Mail
			axios
				.post('/api/mail/booking', { data: state, price: bookingPrice })
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err));
			// add to database
			axios
				.post('/api/history', {
					name: state.name,
					email: state.email,
					price: bookingPrice,
					bookingDate: `${state.arrivalDate.toLocaleDateString('de-DE', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
					})} - ${state.departureDate.toLocaleDateString('de-DE', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
					})}`,
				})
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err));
		},
		[history, bookingPrice]
	);

	// contact for offer
	// get the range between start and end date
	const getDaysArray = function (start, end) {
		for (var arr = [], dt = new Date(start); dt <= end - 1; dt.setDate(dt.getDate() + 1)) {
			arr.push(new Date(dt));
		}
		return arr;
	};
	useEffect(() => {
		const daysBetween = getDaysArray(state.arrivalDate, state.departureDate);
		const weekEnd = daysBetween.filter((day) => [0, 6, 5].includes(day.getDay()));
		const week = daysBetween.filter((day) => ![0, 6, 5].includes(day.getDay()));
		const Season = () => {
			if (
				new Date('2023-05-26') <= new Date(state.arrivalDate) &&
				new Date('2023-09-10') >= new Date(state.arrivalDate)
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
				if (Season() === 'Nebensaison') {
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
				if (Season() === 'Nebensaison') {
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
				if (Season() === 'Nebensaison') {
					setbookingPrice(160 * weekEnd.length + 140 * week.length);
				} else {
					setbookingPrice(230 * weekEnd.length + 200 * week.length);
				}
			}
		}
		if (oneDay) {
			if (Season() === 'Nebensaison') {
				if (state.arrivalDate.getDay() === (5 || 6 || 0)) {
					setbookingPrice(160);
				} else {
					setbookingPrice(140);
				}
			} else {
				if (state.arrivalDate.getDay() === (5 || 6 || 0)) {
					setbookingPrice(230);
				} else {
					setbookingPrice(200);
				}
			}
		}
	}, [state.arrivalDate, state.departureDate, floß, oneDay]);
	return (
		<Container>
			<FormWrapper>
				<React.Fragment>
					<FormTitle>
						{floß === true ? 'Jetzt Floßboot buchen:' : `Jetzt Hausboot buchen:`}
					</FormTitle>
					<Formik
						initialValues={INITIAL_FORM_STATE}
						validationSchema={!oneDay ? FORM_VALIDATION : FORM_VALIDATION2}
						onSubmit={(values) => {
							setState(values);
							handleServer(values);
						}}
					>
						<Form>
							<CheckBox name="floß" label="Floß" stateChanger={setFloß} />
							<TextInput name="name" label="Name" type="text" />
							<TextInput name="email" label="E-Mail" type="email" />
							<TextInput name="phone" label="Telefon" type="tel" />
							{!floß ? (
								<React.Fragment>
									<Select name="person" options={[0, 1, 2, 3, 4, 5]} label="Erwachsene" />
									<Select name="child" options={[0, 1, 2, 3, 4, 5]} label="Kinder" />
								</React.Fragment>
							) : null}
							<Select name="dog" options={[0, 1, 2, 3]} label="Hund" />
							{floß ? <CheckBox name="dayOnly" label="Tagestrip" stateChanger={setOneDay} /> : null}
							<ReactDatePicker
								name="arrivalDate"
								name2="departureDate"
								dayOnly={oneDay}
								booked={[]}
							/>

							<RadioButton name="color" options={['Rot', 'Blau', 'Floß']} label="Hausboot" />
							{floß && (
								<RadioButton
									name="type"
									options={['Floß S', 'Floß L']}
									label="Floßboot (S = max. 10, L = max. 18 Personen)"
								/>
							)}
							<Button>Buchen</Button>
						</Form>
					</Formik>
				</React.Fragment>
			</FormWrapper>
		</Container>
	);
};

export default BookingEntry;
