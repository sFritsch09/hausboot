import styled from 'styled-components';

export const LayoutContainer = styled.div`
	height: 100%;
	padding: 3rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 1.5rem;

	.dim-layer {
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
		background: black;
		opacity: 0;
		pointer-events: none;
	}
	.opened-card {
		border-radius: 15px;
		cursor: pointer;
		width: 40rem;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: column;

		.convo-div {
			background: white;
			height: 100%;
			width: 100%;
			margin: 0 1rem;
			border-radius: 15px;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

			&:first-child {
				margin-left: 0;
			}
		}

		@media screen and (max-width: 900px) {
			width: 100%;
			border-radius: 1em;
		}
	}
	.card {
		background: ${(props) => (props.theme.mode === 'Dark' ? '#181818' : 'white')};
		border-radius: 15px;
		width: 100%;
		height: 100%;
		cursor: pointer;
		&:nth-child(1) {
			grid-column: 1 / span 2;
			grid-row: 1;
		}
		&:nth-child(2) {
			grid-column: 3;
			grid-row: 1;
		}
		&:nth-child(3) {
			grid-column: 1;
			grid-row: 2;
		}
		&:nth-child(4) {
			grid-column: 2 / span 2;
			grid-row: 2;
		}
	}
	.cards-container {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		line-height: 33rem;
		max-width: 100%;
		white-space: nowrap;
		overflow-x: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}

	@media screen and (max-width: 900px) {
		padding: 1rem;
	}
`;
export const ConvoContainer = styled.div`
	.convo {
		display: grid;
		flex-direction: column;
		width: 480px;
		margin: auto;
		padding: 34px 22px;
		border-radius: 12px;
		background-color: ${(props) => (props.theme.mode === 'Dark' ? '#181818' : 'white')};

		& > *:not(:last-child) {
			margin-bottom: 10px;
		}

		@media screen and (max-width: 900px) {
			width: 80vw;
			padding: 1em 0.5em;
		}
	}

	.question-container,
	.answer-container {
		display: flex;
		align-items: center;

		img {
			height: 50px;
			width: 50px;
			margin-right: 10px;
			object-fit: cover;
			object-position: top;
			border-radius: 100%;
		}

		.content {
			position: relative;

			.typing {
				position: absolute;
				top: 50%;
				display: flex;
				width: max-content;
				padding: 10px 18px;
				list-style-type: none;
				border-radius: 25px;
				background-color: #007bff;
				transform: translateY(-50%);

				.dot {
					height: 8px;
					width: 8px;
					border-radius: 100%;
					background-color: white;

					&:not(:last-of-type) {
						margin-right: 5px;
					}
				}
			}
		}

		.question,
		.answer {
			padding: 10px 18px;
			border-radius: 25px;
			background-color: #007bff;
			font-family: inherit;
			font-size: inherit;
			font-weight: inherit;
			color: white;

			@media screen and (max-width: 900px) {
				border-radius: 1.5em;
				padding: 0.5em 0.7em;
			}
		}
	}

	.user {
		justify-self: flex-end;
		display: flex;
		align-items: center;

		span {
			margin-right: 9px;
			transform-origin: right;
			font-size: 10px;
			font-weight: lighter;
			text-transform: uppercase;

			&:hover {
				cursor: pointer;
			}
		}

		button {
			display: flex;
			border: none;
			outline: none;
			padding: 10px 18px;
			border-radius: 25px;
			font-family: inherit;
			font-size: inherit;
			font-weight: inherit;
			color: white;

			@media screen and (max-width: 900px) {
				border-radius: 1.5em;
				padding: 1em 1.2em;
			}

			&:hover {
				cursor: pointer;
			}
		}
	}
`;
export const DisplayCard = styled.div`
	opacity: ${(props) => (props.hide ? 0 : 1)};
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.color};
	margin-top: 2em;
	transition: opacity ease-out 0.2s;

	.notify {
		@media screen and (max-width: 900px) {
			padding: 1em;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	@media screen and (max-width: 900px) {
		font-size: 12px;
		text-align: center;
		line-height: 1.5em;
		padding: 1em;
	}
`;

export const Notify = styled.div`
	background-color: red;
	border-radius: 50%;
	margin-right: 0.6em;
	width: 1.4em;
	height: 1.4em;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Open Sans Condensed', sans-serif;
`;
