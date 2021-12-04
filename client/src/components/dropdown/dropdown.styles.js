import styled from 'styled-components';
import { RiArrowDropDownLine } from 'react-icons/ri';

export const DropdownGroup = styled.div`
	display: ${(props) => (props.active ? 'block' : 'none')};
	align-items: center;
	padding-bottom: 10px;
`;

export const DropdownItems = styled.div`
	cursor: pointer;

	& a {
		padding-top: 20px;
		text-decoration: none;
		color: ${(props) => (props.theme.mode === 'Dark' ? props.theme.color : props.theme.color)};
		display: block;

		@media screen and (min-height: 700px) {
			padding: 20px;
		}
	}
	&:hover {
		color: ${(props) => props.theme.lightColor};
		transition: all 0.3s ease;
	}
`;

export const DropdownToggle = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: ${(props) => (props.active ? '' : '80px')};
	cursor: pointer;
	color: ${(props) => (props.theme.mode === 'Dark' ? props.theme.color : props.theme.color)};

	&:hover {
		color: ${(props) => props.theme.lightColor};
		transition: all 0.3s ease;
	}
`;

export const ArrowIcon = styled(RiArrowDropDownLine)`
	color: ${(props) => (props.theme.mode === 'Dark' ? props.theme.color : props.theme.color)};
	font-size: 40px;
`;
