import React from 'react';
import { CardContainer, CardHeader, IconWrapper, CardWrapper, ReactIcon } from './trips.styles';
import icon from '../../assets/direction.png';

const Trips = () => {
	return (
		<div className="main" style={{ paddingTop: '10%' }}>
			<CardContainer>
				<CardWrapper
					to={{
						pathname:
							'https://hausbootprod.blob.core.windows.net/hausboot-images/Tour WentowseeNeu.pdf',
					}}
					target="_blank"
				>
					<CardHeader>Tour Wentowsee</CardHeader>
					<IconWrapper>
						<ReactIcon src={icon} />
					</IconWrapper>
				</CardWrapper>
				<CardWrapper
					to={{
						pathname:
							'https://hausbootprod.blob.core.windows.net/hausboot-images/Tour StolpseeNeu.pdf',
					}}
					target="_blank"
				>
					<CardHeader>Tour Solpsee</CardHeader>
					<IconWrapper>
						<ReactIcon src={icon} />
					</IconWrapper>
				</CardWrapper>
				<CardWrapper
					to={{
						pathname:
							'https://hausbootprod.blob.core.windows.net/hausboot-images/Tour KuhwallseeNeu.pdf',
					}}
					target="_blank"
				>
					<CardHeader>Tour Kuhwallsee</CardHeader>
					<IconWrapper>
						<ReactIcon src={icon} />
					</IconWrapper>
				</CardWrapper>
				<CardWrapper
					to={{
						pathname:
							'https://hausbootprod.blob.core.windows.net/hausboot-images/Tour GudelackseeNeu.pdf',
					}}
					target="_blank"
				>
					<CardHeader>Tour Gudelacksee</CardHeader>
					<IconWrapper>
						<ReactIcon src={icon} />
					</IconWrapper>
				</CardWrapper>
				<CardWrapper
					to={{
						pathname:
							'https://hausbootprod.blob.core.windows.net/hausboot-images/Tour WerbellinseeNeu.pdf',
					}}
					target="_blank"
				>
					<CardHeader>Tour Werbellinsee</CardHeader>
					<IconWrapper>
						<ReactIcon src={icon} />
					</IconWrapper>
				</CardWrapper>
			</CardContainer>
		</div>
	);
};

export default Trips;
