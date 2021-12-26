import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { MenuContainer, MenuWrapper, MenuUnderline } from './underlinedMenu.styles';

const menuItems = ['Rot', 'Blau', 'Floß S', 'Floß L'];

const MenuItem = ({ text, selected, onClick }) => (
	<MenuWrapper onClick={onClick} animate={{ opacity: selected ? 1 : 0.5 }}>
		{text}
		{selected && <MenuUnderline layoutId="underline" />}
	</MenuWrapper>
);
const UnderlinedMenu = ({ selected, setSelected }) => {
	return (
		<MenuContainer>
			<div className="wrapper">
				<AnimateSharedLayout>
					{menuItems.map((el) => (
						<MenuItem
							text={el}
							key={el}
							selected={selected === el}
							onClick={() => setSelected(el)}
						/>
					))}
				</AnimateSharedLayout>
			</div>
		</MenuContainer>
	);
};

export default UnderlinedMenu;
