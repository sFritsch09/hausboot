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
	FooterLink,
	AboutWrapper,
} from './footer.styles';

const Footer = () => {
	const footerData = [
		{
			title: 'Hellwig & Hellwig GbR',
			content: ['Friedrich-Wilhelm-Str. 69', '12103 Berlin'],
		},
		{
			title: 'Kontakt',
			content: ['hausboot@teichland-kapitäne.de', '015739100506', ''],
		},
		{
			title: 'Legal',
			content: ['Impressum', 'AGB'],
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
									{sec === 'AGB' ? (
										<FooterLink
											target="_blank"
											to={{
												pathname:
													'https://pb.djsicrip.com/api/files/cqrcvtuakl65aun/ocdk3cid0fqvtvk/agb_boot_saison_2022_B5MZfx6kY3.pdf',
											}}
										>
											{sec}
										</FooterLink>
									) : sec === 'Impressum' ? (
										<FooterLink to="/impressum">{sec}</FooterLink>
									) : sec === '015739100506' ? (
										<a style={{ textDecoration: 'none', color: 'inherit' }} href="tel:015739100506">
											{sec}
										</a>
									) : (
										sec
									)}
								</div>
							))}
						</FooterSection>
					))}
				</FooterWrapper>
				<AboutWrapper to="/about">Created By Sebastian Fritsch 💙💛</AboutWrapper>
			</FooterContainer>
		</div>
	);
};

export default Footer;
