import styled, { css } from 'styled-components';

const shrinkLabelStyles = css`
	font-size: 14px;
	top: -4px;
`;
export const Calendar = styled.div`
	display: flex;
	justify-content: center;
	.react-datepicker {
		border-radius: unset !important;
		/* border-radius: 10px; */
		/* box-shadow: 0 6px 12px rgba(27, 37, 86, 0.16); */
		box-shadow: 5px 5px black;
		overflow: hidden;
		border: 4px solid black;
	}

	.react-datepicker__header {
		/* background-color: #2196f3; */
		background-color: #e8da00;
		border-top-right-radius: unset !important;
		border-top-left-radius: unset !important;
	}
	.react-datepicker__current-month {
		color: white !important;
	}
	.react-datepicker__day-name {
		color: white !important;
	}

	.react-datepicker__navigation--next {
		border-left-color: white !important;
	}
	.react-datepicker__navigation--previous {
		border-right-color: white !important;
	}

	.react-datepicker-popper {
		top: -30px !important;
		z-index: 2;
	}
	.react-datepicker__day--in-range {
		background: #2196f3 !important;

		&:hover {
			/* color: red !important; */
		}
	}
	.react-datepicker__day--in-selecting-range {
		&:hover {
			background: #0c7cd6 !important;
		}
	}
	.react-datepicker__month--selecting-range {
		&:hover {
			/* color: red !important; */
		}
	}

	input {
		background: none;
		background-color: ${(props) => props.theme.darkColor};
		color: ${(props) => props.theme.color};
		font-size: 18px;
		padding: 10px 10px 10px 5px;
		display: block;
		width: 100%;
		border: none;
		border-radius: 0;
		border-bottom: 1px solid ${(props) => props.theme.color};
		margin: 25px 0;

		@media screen and (max-width: 900px) {
			font-size: 12px;
			margin: 0;
		}
		&:focus {
			outline: none;
			border-color: #3e51b5;
		}
		&:focus ~ label {
			${shrinkLabelStyles}
			color: #3e51b5;
		}
	}
`;

export const FormInputLabel = styled.label`
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	color: ${(props) => (props.focus ? '#3e51b5' : props.theme.color)};

	@media screen and (max-width: 900px) {
		font-size: 12px !important;
		position: relative;
	}

	&.shrink {
		${shrinkLabelStyles}
	}
`;

export const GroupContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	margin-right: 60px;
`;

export const StyledErrorMessage = styled.div`
	font-size: 12px;
	color: red;
	margin-top: 0.25rem;
	max-width: fit-content;
	&:before {
		content: '❌ ';
		font-size: 10px;
	}
`;
