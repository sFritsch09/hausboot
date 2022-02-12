import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from '../../assets/anchor-text.svg';
import { FaTimes, FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
	background: ${(props) => props.theme.contrastLight};
	height: 4em;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 101;
	@media screen and (max-width: 980px) {
		bottom: 0 !important;
		left: 0 !important;
		top: initial;
		position: fixed;
		width: 100%;
		opacity: 1;
		&.is-hidden {
			opacity: 0;
			transition: transform 0.4s, opacity 0.2s;
		}
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 4em;

	/* Container */
	z-index: 1;
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 2em;
	padding-left: 2em;
	@media screen and (max-width: 980px) {
		padding-left: 30px;
		padding-right: 30px;
	}
	@media screen and (max-width: 1100px) {
		padding: 0;
		margin: 0;
		padding-left: 20px;
	}
`;

export const NavLogo = styled(Link)`
	color: ${(props) => props.theme.color};
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.4rem;
	display: flex;
	align-items: center;
	&:hover {
		color: ${(props) => props.theme.lightColor};
	}

	@media screen and (max-width: 1200px) {
		font-size: 1.5rem;
	}
	@media screen and (max-width: 980px) {
		font-size: 1.2em;
	}
`;

export const NavIcon = styled(Icon)`
	margin-right: 0.5rem;
	color: ${(props) => props.theme.color};
	width: 4em;
	height: 3em;
	@media screen and (max-width: 600px) {
		width: 2em;
	}
`;
// NavIcon.defaultProps = {
// 	src: myIcon,
// };

export const MobileIcon = styled.div`
	display: none;
	color: ${(props) => props.theme.darkColor};
	@media screen and (max-width: 980px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 70%);
		-webkit-transform: translate(-100%, 70%);
		-ms-transform: translate(-100%, 70%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const CloseIcon = styled(FaTimes)`
	color: ${(props) => props.theme.color};
`;
export const BurgerIcon = styled(FaBars)`
	color: ${(props) => props.theme.color};
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: 4em;
	margin-bottom: 0;
	@media screen and (max-width: 980px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-right: 0;
		height: 85vh;
		padding-top: 5em;
		position: absolute;
		bottom: 4em;
		left: 0;
		transform: translateX(${({ click }) => (click ? '0' : '100%')});
		-webkit-transform: -webkit-translateX(${({ click }) => (click ? '0' : '100%')});
		opacity: 1;
		transition: transform 0.3s ease-out;
		-webkit-transition: -webkit-transform 0.3s ease-out;
		background: ${(props) => props.theme.darkColor};
	}
`;

export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;
	display: flex;
	align-items: center;
	flex-direction: column;
	&:hover {
		border-bottom: 2px solid ${(props) => props.theme.lightColor};
	}
	@media screen and (max-width: 980px) {
		width: 100%;
		height: 10vh;
		&:hover {
			border: none;
		}
	}
`;

export const NavLink = styled(Link)`
	color: ${(props) => props.theme.color};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	@media screen and (max-width: 1100px) {
		padding: 0.5rem 0.5rem;
	}
	@media screen and (max-width: 980px) {
		text-align: center;
		padding: 1rem;
		width: 100%;
		display: table;
		&:hover {
			color: ${(props) => props.theme.lightColor};
			transition: all 0.3s ease;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 980px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding-bottom: 20px;
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;

	@media screen and (max-width: 1100px) {
		padding: 8px 8px;
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

export const NavDarkMode = styled.div`
	padding-left: 15px;
	display: flex;
	align-items: center;
	*:focus {
		outline: none;
	}
	button {
		margin: auto;
		line-height: normal;
		overflow: visible !important;
	}
	@media screen and (max-width: 980px) {
		width: 20%;
		&:hover {
			border: none;
		}
	}
`;

export const DarkModeMobile = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: ${(props) => props.theme.color};
	cursor: pointer;
`;
