import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({ children, disabled, ...props }) => {
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
		<LoadingButton {...props} disabled={disabled} {...configButton} style={{ marginTop: '20px' }}>
			{children}
		</LoadingButton>
	);
};

export default ButtonWrapper;
