import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({ children, disabled }) => {
	const { submitForm } = useFormikContext();

	const handleSubmit = () => {
		submitForm();
	};

	const configButton = {
		variant: 'contained',
		color: 'primary',
		fullWidth: true,
		onClick: handleSubmit,
	};

	return (
		<Button disabled={disabled} {...configButton} style={{ marginTop: '20px' }}>
			{children}
		</Button>
	);
};

export default ButtonWrapper;
