import styled from 'styled-components';
import { ReactComponent as WaveLayer } from '../../assets/wave.svg';
import { ReactComponent as paypalIcon } from '../../assets/paypal-icon.svg';
import { ReactComponent as visaIcon } from '../../assets/visa-icon.svg';
import { ReactComponent as mastercardIcon } from '../../assets/mastercard-icon.svg';
import { ReactComponent as sepaIcon } from '../../assets/sepa-icon.svg';
import Wave from 'react-wavify';

export const Waves = styled(WaveLayer)`
	display: block;

	.rect {
		fill: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.darkColor : props.theme.contrastLight};
		width: 100%;
		height: 100%;
		color: white;
	}
	.wave1 {
		fill: ${(props) => props.theme.darkColor};
	}
	.wave2 {
		fill: ${(props) => props.theme.wave2};
	}
	.wave3 {
		fill: ${(props) => props.theme.wave3};
	}
	.wave4 {
		fill: ${(props) => props.theme.wave4};
	}
`;

export const WaveWrapper = styled(Wave)`
	svg {
		path {
			fill: ${(props) => props.theme.wave};
		}
	}
`;
export const WaveContainer = styled.div`
	margin-bottom: -5px;
	background-color: ${(props) =>
		props.theme.mode === 'Dark' ? props.theme.contrastColor : props.theme.darkColor};
`;

export const FooterContainer = styled.div`
	display: flex;
	background: ${(props) =>
		props.theme.mode === 'Dark' ? props.theme.darkColor : props.theme.contrastLight};
	color: ${(props) => props.theme.color};
	padding-top: 20px;
	flex-direction: column;

	@media screen and (max-width: 980px) {
		padding-bottom: 10em;
	}
`;

export const FooterWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	flex-direction: row;
`;

export const FooterSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.header {
		padding: 10px;
	}
	.content {
		padding: 2px;
	}
`;
export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20%;
	padding-bottom: 20px;

	.grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(180px, 1fr));
		gap: 2rem;

		@media screen and (max-width: 980px) {
			gap: 2rem;
			grid-template-columns: repeat(4, minmax(40px, 1fr));
		}
	}
`;
export const IconWrapper = styled.div`
	background: ${(props) =>
		props.theme.mode === 'Dark' ? props.theme.contrastColor : props.theme.color};
	padding: 10px;
	border-radius: 10px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const PaypalIcon = styled(paypalIcon)``;
export const VisaIcon = styled(visaIcon)``;
export const MastercardIcon = styled(mastercardIcon)``;
export const SepaIcon = styled(sepaIcon)``;
