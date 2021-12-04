import styled, { keyframes, css } from 'styled-components';
import { ReactComponent as boatIcon } from '../../assets/house-boat-svgrepo-com.svg';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 30px;
	/* margin: 0 auto; */

	@media screen and (max-width: 900px) {
		padding: auto;
		flex-direction: column;
		padding-bottom: 100px;
	}
`;

export const CardHeader = styled.h2`
	text-align: center;
	padding: 10px;
	color: ${(props) => props.theme.color};

	@media screen and (max-width: 900px) {
		font-size: 16px;
		height: 20px;
	}
`;

export const CardWrapper = styled(Link)`
	text-decoration: none;
	overflow: hidden;
	display: block;
	padding: 0 0 32px;
	/* margin: 48px auto 0; */
	margin: 0 20px;
	width: 100%;
	border: 1px solid ${(props) => props.theme.color};
	border-radius: 2px;
	transition: box-shadow 200ms ease 0s, transform 200ms ease 0s;

	@media screen and (max-width: 900px) {
		margin: 10px 5px;
		padding: 10px;
	}

	&:hover {
		transform: translate(4px, -4px);
		box-shadow: -8px 8px 0 ${(props) => props.theme.color};
	}
`;

export const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const wave = keyframes`

  100%{ 
	transform: translateX(0px);
  }
  50% {

	transform: translateX(40px);
  }
  0% {
	transform: translateX(-40px);
  }
`;

const waveBoat = keyframes`
  100% {
	transform: translateY(0px);
  }
  50%{

	transform: rotate(-1.5deg);
  }
  0% {
	transform: translateY(-15px);
	transform: rotate(1.5deg);
  }
`;

export const BoatIcon = styled(boatIcon)`
	width: 60%;
	position: relative;

	@media screen and (max-width: 900px) {
		width: 100%;
		height: 100%;
	}

	& .water,
	.water-right {
		animation: ${(props) =>
			props.animate
				? css`
						${wave} 3s infinite alternate-revers
				  `
				: null};
		width: 100px;
	}
	& :not(.water, .water-right, .water-clouds) {
		animation: ${(props) =>
			props.animate
				? css`
						${waveBoat} 4s infinite alternate-reverse
				  `
				: null};
	}

	/* animation: ${rotate} infinite 20s linear; */

	& .boat-front {
		fill: ${(props) =>
			props.color === 'red'
				? props.theme.bookingRed
				: props.color === 'blue'
				? props.theme.bookingBlue
				: props.theme.bookingYellow} !important;
	}
	& .boat-front-right {
		fill: ${(props) =>
			props.color === 'red'
				? props.theme.bookingDarkRed
				: props.color === 'blue'
				? props.theme.bookingDarkBlue
				: props.theme.bookingDarkYellow} !important;
	}
	& .boat-top,
	.boat-top-right {
		stroke: black;
		stroke-linejoin: round;
		stroke-width: 10px;
	}
	& .boat-bottom,
	.boat-bottom-right {
		stroke: black;
		stroke-linejoin: round;
		stroke-width: 10px;
	}
	& .boat-front,
	.boat-front-right {
		stroke: black;
		stroke-linejoin: round;
		stroke-width: 6px;
	}
	& .chimney {
		stroke: black;
		stroke-linejoin: round;
		stroke-width: 6px;
	}
`;
