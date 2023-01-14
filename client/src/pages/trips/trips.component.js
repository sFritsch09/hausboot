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
							'https://pb.djsicrip.com/api/files/cqrcvtuakl65aun/kf9idtt0nnmb07z/tour_wentowsee_neu_4CWjPozz7w.pdf',
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
							'https://pb.djsicrip.com/api/files/cqrcvtuakl65aun/kf9idtt0nnmb07z/tour_stolpsee_neu_4tuLV7BsKn.pdf',
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
							'https://pb.djsicrip.com/api/files/cqrcvtuakl65aun/kf9idtt0nnmb07z/tour_kuhwallsee_neu_FqjQIfPdWx.pdf',
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
							'https://pb.djsicrip.com/api/files/cqrcvtuakl65aun/kf9idtt0nnmb07z/tour_gudelacksee_neu_MHDD8YiW6D.pdf',
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
							'https://pb.djsicrip.com/api/files/cqrcvtuakl65aun/kf9idtt0nnmb07z/tour_werbellinsee_rIQeoZMEN5.pdf',
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
