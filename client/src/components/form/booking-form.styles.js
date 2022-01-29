import styled from 'styled-components';

export const Container = styled.div`
	padding: 3em;
	display: flex;
	justify-content: center;
	padding-bottom: 5em;

	@media screen and (max-width: 980px) {
		padding: 0 4em;
		padding-bottom: 5em;
	}
`;

export const FormWrapper = styled.div`
	box-sizing: border-box;
	width: ${(props) => (props.contact ? '60%' : null)};

	@media screen and (max-width: 980px) {
		width: 100%;
	}

	.MuiFormLabel-root,
	.MuiInput-input,
	.MuiSelect-icon {
		color: ${(props) => props.theme.color} !important;
	}
	.MuiInput-underline {
		border-bottom: 2px solid ${(props) => props.theme.bookingForm} !important;
	}
	.MuiFormControlLabel-label {
		color: ${(props) => props.theme.color} !important;
	}
`;

export const FormTitle = styled.h2`
	display: flex;
	justify-content: center;
`;

export const BackButton = styled.button`
	border-radius: 4px;
	background: ${(props) => (props.primary ? props.theme.contrastColor : props.theme.Darkcolor)};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: ${(props) => props.theme.color};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	&:hover {
		transition: all 0.3s ease-out;
		color: ${(props) => props.theme.darkColor};
		background: ${(props) => (props.primary ? props.theme.lightColor : props.theme.Darkcolor)};
	}
	@media screen and (max-width: 900px) {
		width: 100%;
	}
`;
