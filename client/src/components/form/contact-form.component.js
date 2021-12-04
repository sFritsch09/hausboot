import React, { useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { default as Button } from './forms-ui/submit-button.component';
import Textarea from './forms-ui/textarea.component';
import TextInput from './forms-ui/textfield.component';
import { Container, FormTitle, FormWrapper } from './booking-form.styles';
import emailjs from 'emailjs-com';

const INITIAL_FORM_STATE = {
	name: '',
	email: '',
	title: '',
	message: '',
};

const FORM_VALIDATION = Yup.object().shape({
	name: Yup.string().required('Required'),
	email: Yup.string().required('Required').email('Bitte richtige Mail angeben.'),
	title: Yup.string().required('Required'),
	message: Yup.string().required('Required'),
});

const ContactForm = ({ contact }) => {
	const [state, setState] = useState(INITIAL_FORM_STATE);
	const formEl = useRef(null);
	const [sent, setSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('gmail_test', 'template_uhskhd5', e.target, 'user_9PFyIggPDjmUQJfgOVRqe').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<Container>
			{sent ? (
				<div>
					Form gesendet! <button onClick={() => setSent(false)}>Neue Nachricht senden</button>
				</div>
			) : (
				<FormWrapper contact>
					<FormTitle>Kontakt</FormTitle>
					<Formik
						initialValues={{
							...INITIAL_FORM_STATE,
						}}
						validationSchema={FORM_VALIDATION}
						onSubmit={(values) => {
							console.log(values);
							setState(values);
							formEl.current.click();
							setSent(true);
						}}
					>
						<Form>
							<TextInput name="name" label="Name" type="text" />
							<TextInput name="email" label="E-Mail" type="email" />
							<TextInput name="title" label="Betreff" type="text" />
							<Textarea name="message" label="Nachricht" type="text" />
							<Button>Nachricht Senden</Button>
						</Form>
					</Formik>

					<form onSubmit={sendEmail}>
						<input name="name" hidden defaultValue={state.name} />
						<input name="email" hidden defaultValue={state.email} />
						<input name="title" hidden defaultValue={state.title} />
						<input name="message" hidden defaultValue={state.message} />
						<input type="submit" hidden ref={formEl} />
					</form>
				</FormWrapper>
			)}
		</Container>
	);
};

export default ContactForm;
