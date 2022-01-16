import styled from 'styled-components';

export const BookingContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;

	.booking-calendar {
		.header {
			background-color: ${(props) => props.theme.bookingRed};
			.header-content {
				.icon-previous {
					cursor: pointer;
					outline: none;
					padding: 0 10px;
					&:disabled {
						color: ${(props) => props.theme.bookingLightRed};
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
					&:disabled {
						color: ${(props) => props.theme.bookingLightRed};
					}
				}
			}
		}

		.week {
			&.names {
				.day-box .day {
					color: ${(props) => props.theme.bookingLightRed};
				}
			}
			.day-box .day {
				background-color: ${(props) => props.theme.bookingRed};
				&.different-month {
					color: ${(props) => props.theme.bookingLightRed};
				}
				&.selected {
				}
				&.today {
				}
				&.booked-day {
					background-color: ${(props) => props.theme.bookingDarkRed};
				}
				&.booked-day:before {
					background-color: ${(props) => props.theme.bookingDarkRed};
				}
				&.booked-night:after {
					display: none;
				}
			}
		}
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
			background-color: ${(props) => props.theme.bookingRed};
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
			background-color: ${(props) => props.theme.bookingDarkRed};
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

export const PriceListTitle = styled.h1`
	display: flex;
	justify-content: center;
	padding-top: 40px;
	@media screen and (max-width: 900px) {
		font-size: 18px;
		padding-top: 20px;
	}
`;
