import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 30px;
	flex-wrap: wrap;
	gap: 3em;

	@media screen and (max-width: 900px) {
		padding: auto;
		flex-direction: column;
		padding-bottom: 100px;
		flex-wrap: unset;
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
	margin: 0 20px;
	width: 50%;
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

export const ReactIcon = styled.div`
	background-image: url(${(props) => props.src});
	width: ${(props) => (props.big ? '6.5em' : '5.5em')};
	height: ${(props) => (props.big ? '6.5em' : '5.5em')};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	justify-content: center;
`;
