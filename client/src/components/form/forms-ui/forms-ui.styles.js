import styled, { css } from 'styled-components';

const shrinkLabelStyles = css`
	top: -14px;
	font-size: 14px;
`;

export const GroupContainer = styled.div`
	position: relative;
	margin: 45px 0;
	margin-right: 15px;
`;

export const FormInputContainer = styled.input`
	background: none;
	background-color: ${(props) => props.theme.darkColor};
	color: ${(props) => props.theme.color};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 2px solid ${(props) => (props.error ? 'red' : props.theme.color)};
	margin: 25px 0;
	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.bookingForm};
	}
	&:focus ~ label {
		${shrinkLabelStyles}
		color: ${(props) => props.theme.bookingForm};
	}
`;

export const FormTextarea = styled.textarea`
	background: none;
	background-color: ${(props) => props.theme.darkColor};
	color: ${(props) => props.theme.color};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	height: 120px;
	border: none;
	border-radius: 0;
	border-bottom: 2px solid ${(props) => (props.error ? 'red' : props.theme.color)};
	margin: 25px 0;
	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.bookingForm};
	}
	&:focus ~ label {
		${shrinkLabelStyles}
		color: ${(props) => props.theme.bookingForm};
	}
`;

export const FormInputLabel = styled.label`
	color: ${(props) => props.theme.color};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	&.shrink {
		${shrinkLabelStyles}
	}
`;

export const StyledErrorMessage = styled.div`
	font-size: 12px;
	color: red;
	margin-top: 0.25rem;
	&:before {
		content: '❌ ';
		font-size: 10px;
	}
`;
