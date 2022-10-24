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
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
`;

export const Button = styled.button`
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
	@media screen and (max-width: 980px) {
		width: 100%;
	}
`;
