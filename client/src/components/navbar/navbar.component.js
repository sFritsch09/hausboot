import React, { useState, useEffect } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useDarkMode, useDarkModeUpdate } from '../hooks/DarkModeContext';
import {
	Nav,
	NavLogo,
	NavIcon,
	NavbarContainer,
	MobileIcon,
	NavItem,
	NavMenu,
	NavLink,
	NavItemBtn,
	NavBtnLink,
	Button,
	NavDarkMode,
	BurgerIcon,
	CloseIcon,
} from './navbar.styles';
import { DarkModeMobile } from './navbar.styles';

const Navbar = () => {
	const isDarkMode = useDarkMode();
	const setIsDarkMode = useDarkModeUpdate();

	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [scroll, setScroll] = useState(0);

	const handleClick = () => setClick(!click);
	const showButton = () => {
		if (window.innerWidth <= 980) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const scrollCheck = window.scrollY > 4300;
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck);
			}
		});
	});

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<Nav className={scroll ? 'is-hidden' : ''}>
			<NavbarContainer>
				<NavLogo to="/">
					<NavIcon />
					Teichland-Kapitäne
				</NavLogo>
				<MobileIcon onClick={handleClick}>{click ? <CloseIcon /> : <BurgerIcon />}</MobileIcon>
				<NavMenu onClick={handleClick} click={click}>
					<NavItem>
						<NavLink to="/">Home</NavLink>
					</NavItem>

					<NavItem>
						<NavLink to="/booking">Hausboote</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/trips">Touren</NavLink>
					</NavItem>

					<NavItem>
						<NavLink to="/gallery">Fotogalerie</NavLink>
					</NavItem>

					<NavItem>
						<NavLink to="/contact">Kontakt/Anfahrt</NavLink>
					</NavItem>
					<NavItemBtn>
						{button ? (
							<NavBtnLink to="/booking">
								<Button primary>Buchen</Button>
							</NavBtnLink>
						) : (
							<NavBtnLink to="/booking">
								<Button fontBig primary>
									Buchen
								</Button>
							</NavBtnLink>
						)}
					</NavItemBtn>
					{button ? (
						<NavDarkMode>
							<DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={40} />
						</NavDarkMode>
					) : (
						<DarkModeMobile onClick={setIsDarkMode}>
							Theme
							<NavDarkMode onClick={setIsDarkMode}>
								<DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={40} />
							</NavDarkMode>
						</DarkModeMobile>
					)}
				</NavMenu>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
