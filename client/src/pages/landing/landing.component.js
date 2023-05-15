import React from 'react';
import { useLocation } from 'react-router-dom';
import {
	BookedContainer,
	BookedDetails,
	BookedDetailsWrapper,
	BookedList,
	BookedListItem,
	BookedWrapper,
	GifWrapper,
} from './landing.styles';

const LandingPage = () => {
	const location = useLocation();
	console.log(location.state.details);
	return (
		<div className="main">
			<BookedContainer>
				<BookedWrapper>
					<GifWrapper
						src={
							'https://pb.techchase.de/api/files/cqrcvtuakl65aun/1udbj06h91co2dc/titanic_sYV3d5jmjm.gif'
						}
						alt="Nice gif!"
						style={{ margin: '10px' }}
					/>
					<h2 style={{ textAlign: 'center' }}>Deine Buchung wurde bestätigt! ⚓</h2>
					<BookedDetails>Details:</BookedDetails>
					{location.state ? (
						<React.Fragment>
							<BookedDetailsWrapper>
								<BookedListItem>
									<BookedList className="border padding">
										Name
										<span>{location.state.details.name}</span>
									</BookedList>
								</BookedListItem>
								<BookedListItem>
									<BookedList className="border padding">
										Email
										<span>{location.state.details.email}</span>
									</BookedList>
								</BookedListItem>
								<BookedListItem>
									<BookedList className="border padding">
										Personen
										<span style={{ width: '40%' }}>{location.state.details.person}</span>
									</BookedList>
								</BookedListItem>
								<BookedListItem>
									<BookedList className="border padding">
										Von
										<span>
											{location.state.details.arrivalDate.getDate()}.
											{[11, 10, 9].includes(location.state.details.arrivalDate.getMonth())
												? location.state.details.arrivalDate.getMonth() + 1
												: '0' + (location.state.details.arrivalDate.getMonth() + 1)}
											.{location.state.details.arrivalDate.getFullYear()}
										</span>
									</BookedList>
								</BookedListItem>
								<BookedListItem>
									<BookedList className="border padding">
										Bis
										<span>
											{location.state.details.departureDate.getDate()}.
											{[11, 10, 9].includes(location.state.details.departureDate.getMonth())
												? location.state.details.departureDate.getMonth() + 1
												: '0' + (location.state.details.departureDate.getMonth() + 1)}
											.{location.state.details.departureDate.getFullYear()}
										</span>
									</BookedList>
								</BookedListItem>
							</BookedDetailsWrapper>
						</React.Fragment>
					) : null}
				</BookedWrapper>
			</BookedContainer>
		</div>
	);
};

export default LandingPage;
