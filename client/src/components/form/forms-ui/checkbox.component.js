import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { GroupContainer, StyledErrorMessage } from './forms-ui.styles';
import { useField, useFormikContext } from 'formik';

const FormikRadioGroup = ({ name, label, stateChanger, disabled, ...props }) => {
	const { setFieldValue } = useFormikContext();
	const [field, meta] = useField(name);

	const handleChange = (evt) => {
		const { checked } = evt.target;
		setFieldValue(name, checked);
		stateChanger(checked);
	};
	return (
		<GroupContainer>
			<FormControlLabel
				style={{ width: '100%', marginBottom: '1em' }}
				control={
					<Checkbox
						{...field}
						{...props}
						color="primary"
						onChange={handleChange}
						inputProps={{ 'aria-label': 'oneDay checkbox' }}
					/>
				}
				label={label}
			/>
			{meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
		</GroupContainer>
	);
};

export default FormikRadioGroup;
