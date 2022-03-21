import React, { useState, useRef } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { default as Button } from './forms-ui/submit-button.component';
import { default as BackButton } from '@mui/material/Button';
import Textarea from './forms-ui/textarea.component';
import TextInput from './forms-ui/textfield.component';
import { Container, FormTitle, FormWrapper } from './booking-form.styles';
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const FORM_VALIDATION = Yup.object().shape({
	name: Yup.string().required('Required'),
	email: Yup.string().required('Required').email('Bitte richtige Mail angeben.'),
	title: Yup.string().required('Required'),
	message: Yup.string().required('Required'),
});

const INITIAL_FORM_STATE = {
	name: '',
	email: '',
	title: '',
	message: '',
};
const ContactForm = ({ contact }) => {
	const location = useLocation();
	let message = '';
	if (location.state) {
		message =
			`Anfrage für ${
				location.state.color === 'Floß'
					? `Floßboot ${location.state.type}${location.state.dayOnly ? ', Tagestrip' : ''}`
					: `Hausboot ${location.state.color}`
			} \n` +
			`${location.state.person ? 'Personen: ' + location.state.person : ''}` +
			`${location.state.dog > 0 ? `, mit Hund: ${location.state.dog}` : ''}` +
			`${location.state.child > 0 ? `, mit Kinder: ${location.state.child}` : ''} \n` +
			`Anreise: ${location.state.arrivalDate.toLocaleDateString('de-DE', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
			})} \n` +
			`Abreise: ${location.state.departureDate.toLocaleDateString('de-DE', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
			})} \n` +
			`Mobil: ${location.state.phone} \n`;
	}
	const OFFER_STATE = {
		name: location.state?.name,
		email: location.state?.email,
		title: 'Angebot',
		message: message,
	};
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);

	const messageRef = useRef();
	const goToMessage = () => {
		messageRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const sendEmail = (values) => {
		setLoading(true);
		// booking Mail
		axios
			.post('/api/mail/contact', { data: values, offer: location.state ? true : false })
			.then((res) => {
				setLoading(false);
				setSent(true);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
		goToMessage();
	};

	return (
		<Container ref={messageRef}>
			{sent ? (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						marginTop: '6em',
					}}
				>
					<div style={{ marginBottom: '1em', textAlign: 'center' }}>Nachricht gesendet!</div>
					<div>
						<BackButton variant="contained" onClick={() => setSent(false)}>
							Neue Nachricht senden
						</BackButton>
					</div>
				</div>
			) : (
				<FormWrapper contact>
					<FormTitle>Kontakt</FormTitle>
					<Formik
						initialValues={location.state ? OFFER_STATE : INITIAL_FORM_STATE}
						validationSchema={FORM_VALIDATION}
						onSubmit={(values) => {
							console.log(values);
							sendEmail(values);
						}}
					>
						<Form>
							<TextInput name="name" label="Name" type="text" />
							<TextInput name="email" label="E-Mail" type="email" />
							<TextInput name="title" label="Betreff" type="text" />
							<Textarea name="message" label="Nachricht" type="text" />
							<Button loading={loading} endIcon={<SendIcon />}>
								Nachricht Senden
							</Button>
						</Form>
					</Formik>
				</FormWrapper>
			)}
		</Container>
	);
};

export default ContactForm;
