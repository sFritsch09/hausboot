import styled from 'styled-components';
import groundPlanBlue from '../../assets/blau-grundriss.drawio.png';

export const BookingContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;

	.booking-calendar {
		.header {
			background-color: ${(props) => props.theme.bookingBlue};
			.header-content {
				.icon-previous {
					cursor: pointer;
					outline: none;
					padding: 0 10px;
					&:disabled {
						cursor: default;
					}
				}
				.icon-next {
					cursor: pointer;
					outline: none;
					padding: 0 10px;
				}
				.month-label {
					cursor: default;
				}
			}
		}

		.week {
			&.names {
				.day-box .day {
				}
			}

			.day-box .day {
				background-color: ${(props) => props.theme.bookingBlue};
				&.different-month {
				}
				&.selected {
				}
				&.today {
				}
				&.booked-day {
					background-color: ${(props) => props.theme.bookingDarkBlue};
				}
				&.booked-day:before {
					/* background-color: red; */
				}
				&.booked-night:after {
					display: none;
				}
			}
		}
	}
`;

export const PriceListTitle = styled.h1`
	display: flex;
	justify-content: center;
	padding-top: 40px;
	@media screen and (max-width: 900px) {
		font-size: 18px;
		padding-top: 20px;
	}
`;
export const GroundplanWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2em;
	align-items: center;
	font-size: 24px;
	@media screen and (max-width: 900px) {
		font-size: 18px;
		padding: 1em;
	}
`;
export const Groundplan = styled.div`
	background-image: url(${groundPlanBlue});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	max-width: 800px;
	width: 100%;
	height: 400px;
	margin-bottom: 1em;
	@media screen and (max-width: 900px) {
		margin-bottom: 0;
		height: 200px;
	}
`;

export const CalendarWrapper = styled.div`
	width: 500px;
`;
export const CalendarLegend = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	padding: 5px 0;

	.free {
		align-items: center;
		display: flex;
		padding: 0 10px;
		&:before {
			content: '';
			background-color: ${(props) => props.theme.bookingBlue};
			width: 20px;
			margin-right: 10px;
			height: 20px;
			content: '';
			display: inline-flex;
			border-radius: 7.5px;
		}
	}
	.booked {
		padding: 0 10px;
		align-items: center;
		display: flex;
		&:before {
			background-color: ${(props) => props.theme.bookingDarkBlue};
			content: '';
			width: 20px;
			margin-right: 10px;
			height: 20px;
			content: '';
			display: inline-flex;
			border-radius: 7.5px;
		}
	}
`;

export const InfoContainer = styled.div`
	padding: 20px;
	max-width: 80%;
	margin: 0 15%;

	@media screen and (max-width: 900px) {
		margin: 0;
	}
`;
export const InfoSection = styled.div`
	margin: 0 auto;
	padding: 10px;
`;
export const InfoSectionWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const InfoItem = styled.div`
	width: 33%;
	margin-bottom: 15px;
	display: flex;
	align-items: center;
	&:before {
		content: '${(props) => props.icon}';
		display: inline;
		flex-shrink: 0;
		margin-right: 0.75rem;
		font-size: 30px;
	}
`;
export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;

	.week-sub {
		font-weight: lighter;
		color: ${(props) => props.theme.color};
		font-size: 18px;
		padding: 20px;
		@media screen and (max-width: 900px) {
			/* font-size: 10px; */
			text-align: center;
		}
		@media screen and (max-width: 370px) {
			/* font-size: 8px; */
		}
	}
	.driver-license {
		&:before {
			content: '⚠️';
			font-size: 25px;
			margin-right: 10px;
		}
	}
`;

export const InfoList = styled.ul`
	padding: 10px;
`;

export const InfoListItem = styled.li`
	padding: 10px;
`;

export const Button = styled.button`
	border-radius: 4px;
	background: ${(props) => (props.primary ? props.theme.contrastColor : props.theme.Darkcolor)};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: ${(props) => props.theme.color};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	&:hover {
		transition: all 0.3s ease-out;
		color: ${(props) => props.theme.darkColor};
		background: ${(props) => (props.primary ? props.theme.lightColor : props.theme.Darkcolor)};
	}
	@media screen and (max-width: 980px) {
		width: 100%;
	}
`;
