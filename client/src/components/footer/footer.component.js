import { theme } from 'globalStyles';
import React from 'react';
import {
	FooterContainer,
	FooterSection,
	FooterWrapper,
	IconContainer,
	IconWrapper,
	PaypalIcon,
	VisaIcon,
	MastercardIcon,
	SepaIcon,
	WaveWrapper,
	WaveContainer,
} from './footer.styles';

const Footer = () => {
	const footerData = [
		{
			title: 'Section One',
			content: ['Content One', 'Content Two', 'Content Three'],
		},
		{
			title: 'Kontakt',
			content: ['email@gmail.com', 'Mobilnummer', ''],
		},
		{
			title: 'Legal',
			content: ['Impressum', 'Datenschutz', 'AGB'],
		},
	];
	return (
		<div>
			<WaveContainer>
				<WaveWrapper
					fill={theme.wave}
					paused={false}
					options={{
						height: 40,
						amplitude: 70,
						speed: 0.18,
						points: 4,
					}}
				/>
			</WaveContainer>
			<FooterContainer>
				<IconContainer>
					<div className="grid">
						<IconWrapper>
							<PaypalIcon />
						</IconWrapper>
						<IconWrapper>
							<VisaIcon />
						</IconWrapper>
						<IconWrapper>
							<MastercardIcon />
						</IconWrapper>
						<IconWrapper>
							<SepaIcon />
						</IconWrapper>
					</div>
				</IconContainer>
				<FooterWrapper>
					{footerData.map((item) => (
						<FooterSection key={item.title}>
							<h3 className="header">{item.title}</h3>
							{item.content.map((sec) => (
								<div className="content" key={sec}>
									{sec}
								</div>
							))}
						</FooterSection>
					))}
				</FooterWrapper>
			</FooterContainer>
		</div>
	);
};

export default Footer;
