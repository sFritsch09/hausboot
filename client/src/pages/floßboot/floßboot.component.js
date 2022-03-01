import React, { useState, useEffect, useRef } from 'react';
import { getEvents } from '../../fetch';

import BookingCalendar from 'react-booking-calendar';
import BookingForm from '../../components/form/booking-form.component';
import {
	CalendarWrapper,
	BookingContainer,
	CalendarLegend,
	PriceListTitle,
} from './floßboot.styles';
import PriceListComp from 'components/pricelist/priceList.component';
import InfoListComp from 'components/infoList/infoList.component';

const HausbootRot = () => {
	const place = [
		'Der Parkplatz befindet sich auf der großen Wiese hinter dem Restaurant "Zum Flößer"',
		'Hechtweg 16',
		'16515 Bernöwe',
		'Der Oder-Havel-Kanal',
		'0173-2324128',
	];
	const infoListArray = {
		service: [
			'Haftpflicht und Kasko mit 1000,- Euro Selbstbeteiligung',
			'intensive Einweisung im Umgang mit dem Boot, Routenberatung',
			'Einweisungsfahrt',
			'Informationsmaterial und Reiseunterlagen',
		],
		// insurance: [''],
		season: '02.04. 2022 - 04.10.2022',
	};

	const equipS = [
		{
			text: 'Töpfe, Teller, Besteck (bei Mehrtagevermietung)',
			icon: '🍽',
		},
		{
			text: 'Gasherd mit drei Kochplatten',
			icon: '🧯',
		},
		{
			text: 'Kühlbox 50 L',
			icon: '🧊',
		},
		{
			text: 'Zwei Sitzbänke mit Tisch',
			icon: '🪑',
		},
		{
			text: 'Tische als Bett 2x 1,20 m x 2,00 m oder Liegefläche 2,40 m x 2 m',
			icon: '🛏',
		},
		{
			text: 'WC',
			icon: '🚽',
		},
		{
			text: 'USB-Ladestation',
			icon: '🔌',
		},
		{
			text: 'Kann ringsum mit Bootsplanen verschlossen werden',
			icon: '⛺',
		},
	];
	const equipL = [
		{
			text: 'Töpfe, Teller, Besteck',
			icon: '🍽',
		},
		{
			text: 'Gasherd mit zwei Kochplatten',
			icon: '🧯',
		},
		{
			text: 'Kühlbox 50 L',
			icon: '🧊',
		},
		{
			text: 'Zwei Sitzbänke mit Tisch',
			icon: '🪑',
		},
		{
			text: 'Tische als Bett 2x 1,20 m x 2,00 m',
			icon: '🛏',
		},
		{
			text: 'USB-Ladestation',
			icon: '🔌',
		},
		{
			text: 'WC',
			icon: '🚽',
		},
		{
			text: 'Kann ringsum mit Bootsplane verschlossen werden kann',
			icon: '📌',
		},
		{
			text: '2 Zelte für jeweils 2-3 Personen + Matratzen',
			icon: '⛺',
		},
	];
	const bookingRef = useRef();
	const [startDate, setStartDate] = useState([]);
	const [startDateL, setStartDateL] = useState([]);
	const [endDate, setEndDate] = useState([]);
	const [endDateL, setEndDateL] = useState([]);

	const goToBooking = () => {
		bookingRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	// get the range between start and end date
	const getDaysArray = function (start, end) {
		for (var arr = [], dt = new Date(start); dt <= end - 1; dt.setDate(dt.getDate() + 1)) {
			arr.push(new Date(dt));
		}
		return arr;
	};

	const getAllDates = () => {
		var arr = [];
		for (var i in startDate) {
			let dateRange = getDaysArray(new Date(startDate[i]), new Date(endDate[i]));
			arr.push(dateRange.map((date) => date));
		}
		return arr;
	};
	const getAllDatesL = () => {
		var arr = [];
		for (var i in startDate) {
			let dateRange = getDaysArray(new Date(startDateL[i]), new Date(endDateL[i]));
			arr.push(dateRange.map((date) => date));
		}
		return arr;
	};

	const AllDates = getAllDates();
	const AllDatesL = getAllDatesL();

	//merge arrays in one array
	const mergeDedupe = (arr) => {
		return [...new Set([].concat(...arr))];
	};

	useEffect(() => {
		const fetchData = async () => {
			const eventList = await getEvents();

			setStartDate(
				eventList.filter((ev) => ev.description.includes('Floß S')).map((event) => event.start)
			);
			setEndDate(
				eventList.filter((ev) => ev.description.includes('Floß S')).map((event) => event.end)
			);
			setStartDateL(
				eventList.filter((ev) => ev.description.includes('Floß L')).map((event) => event.start)
			);
			setEndDateL(
				eventList.filter((ev) => ev.description.includes('Floß L')).map((event) => event.end)
			);
		};

		fetchData();
	}, []);
	//Tagespreis - HS - NS
	//Tagespreis 2 - HS - NS
	//Wochenendpreis - HS - NS
	//Wochenendpreis 2 - HS - NS
	//Optianal:
	//Kugelgrill
	//Wäschepaket
	//Parkplatz
	return (
		<div className="main">
			<PriceListTitle>Floßboot</PriceListTitle>
			<InfoListComp
				infoArray={equipS}
				goToBooking={goToBooking}
				infoListArray={infoListArray}
				infoArray2={equipL}
				place={place}
				floß
			/>
			<PriceListComp
				weekendDayprice2={250}
				dayPrice2={200}
				weekPrice2={750}
				weekendWeekPrice2={450}
			/>
			<BookingContainer>
				<CalendarWrapper>
					<span className="title">Floßboot S</span>
					<CalendarLegend>
						<div className="free">Frei</div>
						<div className="booked">Belegt</div>
					</CalendarLegend>
					<BookingCalendar bookings={mergeDedupe(AllDates)} disableHistory />
					<div></div>
				</CalendarWrapper>
			</BookingContainer>
			<BookingContainer>
				<CalendarWrapper>
					<span className="title">Floßboot L</span>
					<CalendarLegend>
						<div className="free">Frei</div>
						<div className="booked">Belegt</div>
					</CalendarLegend>
					<BookingCalendar bookings={mergeDedupe(AllDatesL)} disableHistory />
					<div></div>
				</CalendarWrapper>
			</BookingContainer>
			<div ref={bookingRef}>
				<BookingForm hausboot="Floß" booked={mergeDedupe(AllDates)} floß />
			</div>
		</div>
	);
};

export default HausbootRot;
