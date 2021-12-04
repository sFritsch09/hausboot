import React from 'react';
import { useField } from 'formik';
import {
	GroupContainer,
	FormTextarea,
	FormInputLabel,
	StyledErrorMessage,
} from './forms-ui.styles';

const Textarea = ({ name, label, type, ...props }) => {
	const [field, meta] = useField(name);
	return (
		<GroupContainer>
			<FormTextarea type={type} name={name} {...field} {...props} error={meta.error} />
			<FormInputLabel className={meta.value ? 'shrink' : ''}>{label}</FormInputLabel>
			{meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
		</GroupContainer>
	);
};

export default Textarea;
