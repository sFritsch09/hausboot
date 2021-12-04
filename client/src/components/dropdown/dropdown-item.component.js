import React from 'react';
import { DropdownItems } from './dropdown.styles';

function DropdownItem(props) {
	return (
		<DropdownItems onClick={props.onClick}>
			<span>{props.children}</span>
		</DropdownItems>
	);
}

export default DropdownItem;
