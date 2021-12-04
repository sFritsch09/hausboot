import React from 'react';
import { CardWrapper, IconWrapper, BoatIcon, CardContainer, CardHeader } from './booking.styles';

const Booking = () => {
	return (
		<div className="main" style={{ paddingTop: '10%' }}>
			<CardContainer>
				<CardWrapper to="/hausboot-rot">
					<CardHeader>Hausboot Rot</CardHeader>
					<IconWrapper>
						<BoatIcon color="red" animate="true" />
					</IconWrapper>
				</CardWrapper>
				<CardWrapper to="/hausboot-blau">
					<CardHeader>Hausboot Blau</CardHeader>
					<IconWrapper>
						<BoatIcon color="blue" animate="true" />
					</IconWrapper>
				</CardWrapper>
				<CardWrapper to="/floßboot">
					<CardHeader>Floßboot</CardHeader>
					<IconWrapper>
						<BoatIcon animate="true" />
					</IconWrapper>
				</CardWrapper>
			</CardContainer>
		</div>
	);
};

export default Booking;
