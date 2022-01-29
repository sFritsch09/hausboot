import React, { useState, useEffect, useRef } from 'react';
import { getEvents } from '../../fetch';

import BookingCalendar from 'react-booking-calendar';
import BookingForm from '../../components/form/booking-form.component';
import {
	CalendarWrapper,
	BookingContainer,
	CalendarLegend,
	PriceListTitle,
} from './hausboot-blau.styles';
import PriceListComp from 'components/pricelist/priceList.component';
import InfoListComp from 'components/infoList/infoList.component';

const HausbootRot = () => {
	const place = [
		'Schiffswerft Liebenwalde',
		'Hafenmeister Andre Schumacher',
		'Neuholländer Chaussee 5',
		'16559 Liebenwalde',
		'0173-2324128',
	];
	const infoListArray = [
		{
			service: [
				'Haftungsreduzierung der Selbstbeteiligung auf 700 Euro 12-Euro/Tag',
				'intensive Einweisung im Umgang mit dem Boot, Routenberatung',
				'Einweisungsfahrt',
				'Informationsmaterial und Reiseunterlagen',
			],
			insurance: [
				'Haftungsreduzierung der Selbstbeteiligung auf 700 Euro 12-Euro/Tag',
				'Haftungsreduzierung der Selbstbeteiligung auf 400 Euro 18-Euro/Tag',
				'Haftungsreduzierung der Selbstbeteiligung auf 100 Euro 22 Euro/Tag',
			],
			mainSeason: '22.05.2021 - 25.09.2021 und 21.05.2022 - 03.09.2022',
			lowSeason: '27.03.2021 - 29.05.2021 und 26.09.2021 - 20.05.2022 (ohne Himmelfahrt)',
		},
	];
	const equip = [
		{
			text: 'Töpfe, Teller, Besteck',
			icon: '🍽',
		},
		{
			text: 'Gasherd mit drei Kochplatten',
			icon: '🧯',
		},
		{
			text: 'Kühlschrank 50L mit kleinem Gefrierfach',
			icon: '🧊',
		},
		{
			text: 'Fernseher mit DVD',
			icon: '📺',
		},
		{
			text: 'Fernglas',
			icon: '🔎',
		},
		{
			text: 'Sonnenliege',
			icon: '⛱',
		},
		{
			text: 'WC',
			icon: '🚽',
		},
		{
			text: 'Stromversorgung (Solaranlage, Batterien)',
			icon: '🔌',
		},
		{
			text: 'Standheizung',
			icon: '🌡',
		},
		{
			text: 'Ein Doppelbett 180×200 cm',
			icon: '🛏',
		},
		{
			text: 'Sofa (2 weitere Schlafplätze)',
			icon: '🛋',
		},
	];
	const bookingRef = useRef();
	const [startDate, setStartDate] = useState([]);
	const [endDate, setEndDate] = useState([]);

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

	const AllDates = getAllDates();

	//merge arrays in one array
	const mergeDedupe = (arr) => {
		return [...new Set([].concat(...arr))];
	};

	useEffect(() => {
		const fetchData = async () => {
			// getEvents((events) => setStartDate(events.map((event) => event.start))); //fetch start date
			// getEvents((events) => setEndDate(events.map((event) => event.end))); //fetch end date
			const eventList = await getEvents();
			setStartDate(
				eventList
					.filter((ev) => ev.description.includes('Hausboot Blau'))
					.map((event) => event.start)
			);
			setEndDate(
				eventList.filter((ev) => ev.description.includes('Hausboot Blau')).map((event) => event.end)
			);
		};
		fetchData();
	}, []);
	return (
		<div className="main">
			<PriceListTitle>Hausboot Blau</PriceListTitle>
			<InfoListComp
				infoListArray={infoListArray}
				infoArray={equip}
				goToBooking={goToBooking}
				place={place}
			/>
			<PriceListComp
				weekendDayprice={150}
				weekendDayprice2={230}
				dayPrice={130}
				dayPrice2={200}
				weekPrice={420}
				weekPrice2={590}
				weekendWeekPrice={710}
				weekendWeekPrice2={1190}
			/>
			<BookingContainer>
				<CalendarWrapper>
					<CalendarLegend>
						<div className="free">Frei</div>
						<div className="booked">Belegt</div>
					</CalendarLegend>
					<BookingCalendar bookings={mergeDedupe(AllDates)} disableHistory={false} />
					<div></div>
				</CalendarWrapper>
			</BookingContainer>
			<div ref={bookingRef}>
				<BookingForm hausboot="Blau" booked={mergeDedupe(AllDates)} />
			</div>
		</div>
	);
};

export default HausbootRot;
