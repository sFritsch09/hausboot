import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 6% 0;
	margin: 0 auto;
	max-width: 1200px;

	.box {
		width: 650px;
		height: 250px;
		position: relative;
		display: flex;
		justify-content: center;
		flex-direction: column;

		.title {
			width: 100%;
			position: relative;
			display: flex;
			align-items: center;
			height: 150px;

			.block {
				width: 0%;
				height: inherit;
				background: ${(props) => props.theme.contrastDark};
				position: absolute;
				animation: mainBlock 1.4s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
				display: flex;
			}

			h1 {
				font-family: 'Open Sans';
				color: ${(props) => props.theme.color};
				font-size: 72px;
				-webkit-animation: mainFadeIn 1.6s forwards;
				-o-animation: mainFadeIn 1.6s forwards;
				animation: mainFadeIn 1.6s forwards;
				animation-delay: 1.2s;
				opacity: 0;
				display: flex;
				align-items: baseline;
				position: relative;

				span {
					width: 0px;
					height: 0px;
					-webkit-border-radius: 50%;
					-moz-border-radius: 50%;
					border-radius: 50%;

					background: ${(props) => props.theme.contrastDark};
					-webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
					animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
					animation-delay: 1.8s;
					margin-left: 5px;
					margin-top: -10px;
					position: absolute;
					bottom: 13px;
					right: -12px;
				}
			}
		}

		.role {
			width: 100%;
			position: relative;
			display: flex;
			align-items: center;
			height: 30px;
			margin-top: -10px;

			.block {
				width: 0%;
				height: inherit;
				background: ${(props) => props.theme.contrastLight};
				position: absolute;
				animation: secBlock 1.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
				animation-delay: 1.8s;
				display: flex;
			}

			p {
				animation: secFadeIn 1.8s forwards;
				animation-delay: 3s;
				opacity: 0;
				font-family: 'Open Sans';
				color: ${(props) => props.theme.color};
				font-size: 28px;
				text-transform: uppercase;
				letter-spacing: 5px;
			}
		}
	}

	@keyframes mainBlock {
		0% {
			width: 0%;
			left: 0;
		}
		50% {
			width: 100%;
			left: 0;
		}
		100% {
			width: 0;
			left: 100%;
		}
	}

	@keyframes secBlock {
		0% {
			width: 0%;
			left: 0;
		}
		50% {
			width: 100%;
			left: 0;
		}
		100% {
			width: 0;
			left: 100%;
		}
	}

	@keyframes mainFadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes popIn {
		0% {
			width: 0px;
			height: 0px;
			background: ${(props) => props.theme.contrastDark};
			border: 0px solid #ddd;
			opacity: 0;
		}
		50% {
			width: 10px;
			height: 10px;
			background: ${(props) => props.theme.contrastDark};
			opacity: 1;
			bottom: 45px;
		}
		65% {
			width: 7px;
			height: 7px;
			bottom: 0px;
			width: 15px;
		}
		80% {
			width: 10px;
			height: 10px;
			bottom: 20px;
		}
		100% {
			width: 7px;
			height: 7px;
			background: ${(props) => props.theme.contrastDark};
			border: 0px solid #222;
			bottom: 13px;
		}
	}

	@keyframes secFadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0.5;
		}
	}
	@media screen and (max-width: 900px) {
		width: 250px;

		.box {
			width: 250px;
			height: 250px;
			.title {
				h1 {
					font-size: 48px;
				}
			}
			.role {
				height: 22px;

				p {
					font-size: 18px;
				}
			}
		}
	}
`;
export const AboutImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 2em;
`;
export const AboutImage = styled.div`
	background-image: url('https://pb.djsicrip.com/api/files/cqrcvtuakl65aun/1udbj06h91co2dc/me03_vYMTFmE4eb.jpeg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 20%;
	width: 500px;
	height: 500px;
	animation: fader 0.8s ease-in-out 1.8s forwards;
	opacity: 0;

	@media screen and (max-width: 900px) {
		width: 250px;
		height: 250px;
	}

	@keyframes fader {
		from {
			opacity: 0;
			transform: translateX(-3em);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
`;
export const AboutHeader = styled.div`
	font-size: 26px;
	display: flex;
	justify-content: center;
`;

export const StackRow = styled.div`
	display: flex;
	align-items: center;
	border-bottom: ${(props) => (props.border ? `2px solid ${props.theme.contrastLight}` : '')};
	height: 200px;

	@media screen and (max-width: 900px) {
		flex-wrap: wrap;
		height: auto;
		text-align: center;
		justify-content: center;
		padding-bottom: 1em;
	}
`;
export const StackHeader = styled.div`
	flex-basis: 25%;
	flex-shrink: 0;
	font-size: ${(props) => (props.big ? '36px' : '26px')};
	margin-top: 1em;
`;
export const StackChild = styled.div`
	flex-basis: 20%;
	flex-shrink: 0;
	align-items: center;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 900px) {
		flex-shrink: 1;
	}
`;

export const ReactLogo = styled.div`
	background-image: url(${(props) => props.src});
	width: 8em;
	height: 8em;
	background-size: contain;
	background-repeat: no-repeat;
	margin: 1em;
	background-position: center;
	animation: fadeIn 1s forwards;
	animation-delay: ${(props) => 3 + +props.delay + 's'};
	opacity: 0;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-3em);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@media screen and (max-width: 900px) {
		width: 3em;
		height: 3em;
	}
`;

export const AboutContact = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2em;

	div {
		margin-bottom: 1em;
		display: flex;
		align-items: center;
	}
`;
export const AboutContactHeader = styled.div`
	padding: 1em 0;
`;
export const ReactIcon = styled.div`
	background-image: url(${(props) => props.src});
	width: ${(props) => (props.big ? '2.5em' : '1.5em')};
	height: ${(props) => (props.big ? '2.5em' : '1.5em')};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	justify-content: center;
`;

export const AboutContactLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	&:hover {
		color: ${(props) => props.theme.lightColor};
	}
	margin-left: 1em;
`;

export const MailIcon = styled(MailOutlineIcon)`
	color: ${(props) => (props.theme.mode === 'Dark' ? props.theme.color : props.theme.color)};
	font-size: 1.5em;
`;
