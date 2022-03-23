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
	margin-top: 60px;
	box-sizing: border-box;
	width: ${(props) => (props.contact ? '60%' : '30%')};

	@media screen and (max-width: 980px) {
		width: 100%;

		h2 {
			font-size: 18px;
			text-align: center;
		}
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

export const Spinner = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.wave {
		width: 5px;
		height: 100px;
		background: linear-gradient(45deg, cyan, #fff);
		margin: 10px;
		animation: wave 1s linear infinite;
		border-radius: 20px;
	}
	.wave:nth-child(2) {
		animation-delay: 0.1s;
	}
	.wave:nth-child(3) {
		animation-delay: 0.2s;
	}
	.wave:nth-child(4) {
		animation-delay: 0.3s;
	}
	.wave:nth-child(5) {
		animation-delay: 0.4s;
	}
	.wave:nth-child(6) {
		animation-delay: 0.5s;
	}
	.wave:nth-child(7) {
		animation-delay: 0.6s;
	}
	.wave:nth-child(8) {
		animation-delay: 0.7s;
	}
	.wave:nth-child(9) {
		animation-delay: 0.8s;
	}
	.wave:nth-child(10) {
		animation-delay: 0.9s;
	}

	@keyframes wave {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
`;
