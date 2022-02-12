import styled from 'styled-components';

export const SliderWrapper = styled.div`
	*:focus {
		outline: none;
	}
`;

export const Angle = styled.div`
	position: relative;
	height: 20px;
	padding-bottom: 90px;
	background-color: ${(props) =>
		props.theme.mode === 'Dark' ? props.theme.contrastColor : props.theme.darkColor};
	&:before {
		top: -50px;
		transform: skewY(2.4deg);
		transform-origin: 100% 0;
		background: inherit;
		content: '';
		display: block;
		height: 180px;
		left: 0;
		position: absolute;
		right: 0;
		backface-visibility: hidden; // for Chrome Windows
		@media screen and (min-width: 2000px) {
			top: -20px;
		}
		@media screen and (max-width: 900px) {
			top: -80px;
		}
	}
`;
export const Imgage = styled.img`
	background-image: url(${(props) => props.imageSrc});
	width: 100%;
	height: 600px;
	background-position: 50% 45%;
	background-size: cover;
	background-repeat: no-repeat;
	transition: all 0.5s ease;
	&:hover {
		transform: scale(1.1);
	}

	@media screen and (max-width: 900px) {
		&:hover {
			transform: none;
		}
	}
`;

export const ReviewContainer = styled.div`
	height: 20rem;
	background-color: ${(props) =>
		props.theme.mode === 'Dark' ? props.theme.darkColor : props.theme.contrastColor};
	position: relative;
`;

export const YoutubeWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2em;

	.youtube {
		max-width: 860px;
		width: 100%;
		height: 100%;
	}
`;
