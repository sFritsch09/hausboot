import React from 'react';
import {
	AboutContact,
	AboutContainer,
	AboutHeader,
	AboutImage,
	AboutImageWrapper,
	ReactLogo,
	StackChild,
	StackHeader,
	StackRow,
	AboutContactHeader,
	ReactIcon,
	AboutContactLink,
	MailIcon,
} from './about.styles';
import reactLogo from '../../assets/techstack/react-logo.png';
import styledLogo from '../../assets/techstack/styledComponents-logo.png';
import materialUiLogo from '../../assets/techstack/materialUI-logo.png';
import framerLogo from '../../assets/techstack/framerMotion-logo.png';
import nodeLogo from '../../assets/techstack/node-logo.webp';
import expressLogo from '../../assets/techstack/express-logo.png';
import googleLogo from '../../assets/techstack/google-logo.png';
import nginxLogo from '../../assets/techstack/nginx-logo.png';
import dockerLogo from '../../assets/techstack/docker-logo.webp';
import githubLogo from '../../assets/techstack/github.webp';
import azureLogo from '../../assets/techstack/azure-logo.png';
import linkedInLogo from '../../assets/techstack/linkedin-logo.png';
import githubIconLogo from '../../assets/techstack/githubIcon-logo.png';

const About = () => {
	const techStack = {
		frontend: [
			{ title: 'React', logo: reactLogo, delay: '0' },
			{ title: 'Styled Components', logo: styledLogo, delay: '0.3' },
			{ title: 'Material UI', logo: materialUiLogo, delay: '0.6' },
			{ title: 'Framer Motion', logo: framerLogo, delay: '0.9' },
		],
		backend: [
			{ title: 'Node.js', logo: nodeLogo, delay: '1' },
			{ title: 'Express', logo: expressLogo, delay: '1.3' },
			{ title: 'Google API', logo: googleLogo, delay: '1.6' },
			{ title: 'Nginx', logo: nginxLogo, delay: '1.9' },
		],
		ciCd: [
			{ title: 'Github Actions', logo: githubLogo, delay: '2' },
			{ title: 'Docker', logo: dockerLogo, delay: '2.3' },
			{ title: 'Azure', logo: azureLogo, delay: '2.6' },
		],
	};
	return (
		<div className="main">
			<AboutContainer>
				<AboutHeader>
					<div className="box">
						<div className="title">
							<span className="block"></span>
							<h1>
								Sebastian Fritsch<span></span>
							</h1>
						</div>

						<div className="role">
							<div className="block"></div>
							<p>DevOps Engineer</p>
						</div>
					</div>
				</AboutHeader>
				<AboutImageWrapper>
					<AboutImage />
				</AboutImageWrapper>
				<StackHeader big>Tech Stack</StackHeader>
				<StackHeader>Frontend:</StackHeader>
				<StackRow border>
					{techStack.frontend.map((frontend) => (
						<StackChild key={frontend.title}>
							<ReactLogo src={frontend.logo} delay={frontend.delay} />
							{frontend.title}
						</StackChild>
					))}
				</StackRow>
				<StackHeader>Backend:</StackHeader>
				<StackRow border>
					{techStack.backend.map((backend) => (
						<StackChild key={backend.title}>
							<ReactLogo src={backend.logo} delay={backend.delay} />
							{backend.title}
						</StackChild>
					))}
				</StackRow>
				<StackHeader>CI/CD:</StackHeader>
				<StackRow border>
					{techStack.ciCd.map((ciCd) => (
						<StackChild key={ciCd.title}>
							<ReactLogo src={ciCd.logo} delay={ciCd.delay} />
							{ciCd.title}
						</StackChild>
					))}
				</StackRow>
				<AboutContact>
					<AboutContactHeader>
						<h1>Kontakt</h1>
						<h2>{process.env.REACT_APP_PAYPAL_ID1}</h2>
					</AboutContactHeader>
					<div>
						<ReactIcon src={linkedInLogo} />
						<div>
							<AboutContactLink
								to={{ pathname: 'https://www.linkedin.com/in/sebastian-fritsch-3676831bb' }}
								target="_blank"
							>
								Sebastian Fritsch
							</AboutContactLink>
						</div>
					</div>
					<div>
						<div>
							<MailIcon />
						</div>
						<div style={{ marginLeft: '1em' }}>sfritsch09@gmail.com</div>
					</div>
					<div>
						<ReactIcon src={githubIconLogo} />
						<div>
							<AboutContactLink to={{ pathname: 'https://github.com/sFritsch09' }} target="_blank">
								sfritsch09
							</AboutContactLink>
						</div>
					</div>
				</AboutContact>
			</AboutContainer>
		</div>
	);
};

export default About;
