import React from 'react';
import { CardContainer, CardHeader, IconWrapper, CardWrapper, ReactIcon } from './trips.styles';
import icon from '../../assets/direction.png';

const Trips = () => {
	return (
		<div className="main" style={{ paddingTop: '10%' }}>
			<CardContainer>
				<CardWrapper
					to={{
						pathname: 'https://hausboot.fra1.digitaloceanspaces.com/Tour%20WentowseeNeu.pdf',
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
						pathname: 'https://hausboot.fra1.digitaloceanspaces.com/Tour%20StolpseeNeu.pdf',
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
						pathname: 'https://hausboot.fra1.digitaloceanspaces.com/Tour%20KuhwallseeNeu.pdf',
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
						pathname: 'https://hausboot.fra1.digitaloceanspaces.com/Tour%20GudelackseeNeu.pdf',
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
						pathname: 'https://hausboot.fra1.digitaloceanspaces.com/Tour%20WerbellinseeNeu.pdf',
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
