import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContactContainer = styled.div`
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 980px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const InfoWrapper = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0 60px;

	@media screen and (max-width: 980px) {
		width: fit-content;
		padding: 0 2em;
	}
	.title {
		padding: 20px 0;
	}
	.phone {
		padding: 10px;
		align-self: flex-start;
	}

	.route {
		padding: 1em 0;
	}
	.place {
		margin-bottom: 2em;
	}
`;

export const ContactWrapper = styled.div`
	width: 70%;
	@media screen and (max-width: 980px) {
		width: 100%;
		margin: 2em 8em;
	}
`;

export const MapsContainer = styled.div`
	padding: 20px 60px;
	display: flex;
	justify-content: center;
	height: 500px;
	@media screen and (max-width: 980px) {
		height: 20em;
		padding: 0.5em 2em;
		padding-bottom: 4em;
	}
`;
export const Button = styled(Link)`
	text-decoration: none;
	border-radius: 4px;
	background: ${(props) => (props.primary ? props.theme.contrastColor : props.theme.Darkcolor)};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: ${(props) => props.theme.color};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	display: flex;
	cursor: pointer;
	&:hover {
		transition: all 0.3s ease-out;
		color: ${(props) => props.theme.darkColor};
		background: ${(props) => (props.primary ? props.theme.lightColor : props.theme.Darkcolor)};
	}
`;

export const ImgButton = styled.img`
	background-image: url(${({ src }) => src});
	width: 100%;
`;
