import React, { useState } from 'react';
import { ArrowIcon, DropdownGroup, DropdownToggle } from './dropdown.styles';

function Dropdown(props) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<React.Fragment>
			<DropdownToggle
				active={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				Hausboote
				{<ArrowIcon />}
			</DropdownToggle>
			<DropdownGroup active={isOpen}>{props.children}</DropdownGroup>
		</React.Fragment>
	);
}

export default Dropdown;
