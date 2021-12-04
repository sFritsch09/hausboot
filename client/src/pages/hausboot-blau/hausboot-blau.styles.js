import styled from 'styled-components';

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

export const PriceListContainer = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
	height: 950px;
	flex-direction: column;
	align-items: center;

	.padding {
		padding: 10px 0;
		@media screen and (max-width: 900px) {
			font-size: 10px;
		}
	}
`;

export const PriceListWrapper = styled.div`
	border-radius: 16px;
	box-sizing: border-box;
	background-color: ${(props) => props.theme.contrastColor};
	color: ${(props) => props.theme.color};
	width: 100%;
	display: flex;
	text-align: center;
	padding: 5px 0;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

	@media screen and (min-width: 900px) {
		max-width: 80%;
	}
	@media screen and (max-width: 900px) {
		font-size: 10px;
		padding: 0 2px;
	}
`;

export const PriceList = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 100%;
	word-break: break-all;
	overflow: hidden;
	.border {
		border-bottom: solid 1px ${(props) => props.theme.darkColor};
	}
	.padding {
		padding: 10px 0;
	}
`;
export const PriceListSeason = styled.div`
	width: 25%;
	display: flex;
	flex-flow: wrap column;
	word-break: break-all;
	overflow: hidden;
	align-items: center;
	@media screen and (max-width: 900px) {
		padding: 0 2px;
	}
	.total {
		justify-content: flex-end;
		align-self: center;
		border-bottom: double 6px ${(props) => props.theme.contrastLight};
		margin-bottom: 10px;
		padding: 20px 0;
	}
`;

export const PriceListHeader = styled.h2`
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	border-bottom: solid 1px ${(props) => props.theme.darkColor};
	margin-bottom: 6px;
	@media screen and (max-width: 900px) {
		font-size: 16px;
	}
	.price-header {
		flex: 1;
		display: flex;
		justify-content: center;
		@media screen and (max-width: 700px) {
			font-size: 12px;
		}
	}
	.season-header {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px 5px;
		@media screen and (max-width: 700px) {
			font-size: 11px;
		}

		.week-sub {
			text-align: center;
			font-weight: lighter;
			color: ${(props) => props.theme.color};
			font-size: 18px;
			@media screen and (max-width: 900px) {
				font-size: 10px;
			}
			@media screen and (max-width: 370px) {
				font-size: 8px;
			}
		}
	}
`;

export const PriceListItem = styled.div`
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	background-color: ${(props) =>
		props.active === 130 ||
		props.active === 420 ||
		props.active === 5 ||
		props.active === 20 ||
		props.active === 3 ||
		props.active2 === 150 ||
		props.active2 === 710
			? props.theme.lightColor
			: null};
	cursor: ${(props) => (props.clickable ? 'pointer' : null)};
	&:hover {
		color: ${(props) => (props.clickable ? props.theme.priceColor : null)};
	}
	@media screen and (max-width: 900px) {
		padding: 0 4px;
	}
	.week {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.item {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.week-header {
		background-color: ${(props) => props.theme.contrastColor};
		/* filter: brightness(105%); */
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.week-sub {
		font-weight: lighter;
		color: ${(props) => props.theme.color};
		padding: 0 4px;
		@media screen and (max-width: 380px) {
			font-size: 8px;
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
