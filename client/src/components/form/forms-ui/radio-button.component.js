import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import { GroupContainer, StyledErrorMessage } from './forms-ui.styles';
import { useField } from 'formik';

const FormikRadioGroup = ({ name, label, options, disabled, ...props }) => {
	const [field, meta] = useField(name);

	return (
		<GroupContainer>
			<FormLabel component="legend">{label}</FormLabel>
			<RadioGroup {...field} {...props} row>
				{options.map((option) => (
					<FormControlLabel
						key={option}
						value={option}
						control={<Radio />}
						label={option}
						disabled={disabled}
					/>
				))}
			</RadioGroup>
			{meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
		</GroupContainer>
	);
};

export default FormikRadioGroup;
