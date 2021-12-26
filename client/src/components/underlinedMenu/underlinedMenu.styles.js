import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuWrapper = styled(motion.div)`
	margin: 0 1.5rem;
	font-size: 3rem;
	font-weight: 700;
	cursor: pointer;
	position: relative;

	@media screen and (max-width: 900px) {
		font-weight: 600;
		font-size: 1.2rem;
        margin 0 0.5rem;
	}
`;

export const MenuUnderline = styled(motion.div)`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: 4px;
	border-radius: 15px;
	background: ${(props) => props.theme.contrastDark};
	opacity: 0.85;
`;

export const MenuContainer = styled.div`
	padding: 2em;
	display: flex;
	justify-content: space-evenly;
	color: ${(props) => props.theme.color};
	background: ${(props) => props.theme.contrastColor};
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

	@media screen and (max-width: 900px) {
		padding: 1em 0.5em;
	}
	.wrapper {
		display: flex;
		justify-content: space-evenly;
	}
`;
