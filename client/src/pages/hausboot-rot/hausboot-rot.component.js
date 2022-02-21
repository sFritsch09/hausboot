import React, { useState, useEffect, useRef } from 'react';
import { getEvents } from '../../fetch';

import BookingCalendar from 'react-booking-calendar';
import BookingForm from '../../components/form/booking-form.component';
import PriceListComp from 'components/pricelist/priceList.component';
import InfoListComp from 'components/infoList/infoList.component';
import {
	CalendarWrapper,
	BookingContainer,
	CalendarLegend,
	PriceListTitle,
} from './hausboot-rot.styles';

const HausbootRot = () => {
	const place = [
		'Schiffswerft Liebenwalde',
		'Hafenmeister Andre Schumacher',
		'Neuholländer Chaussee 5',
		'16559 Liebenwalde',
		'0173-2324128',
	];
	const infoListArray = {
		service: [
			'Haftpflicht und Kasko mit 1000,- Euro Selbstbeteiligung',
			'intensive Einweisung im Umgang mit dem Boot, Routenberatung',
			'Einweisungsfahrt',
			'Informationsmaterial und Reiseunterlagen',
		],
		insurance: [
			'Haftungsreduzierung der Selbstbeteiligung auf 700 Euro 12,- Euro/Tag',
			'Haftungsreduzierung der Selbstbeteiligung auf 400 Euro 18,- Euro/Tag',
			'Haftungsreduzierung der Selbstbeteiligung auf 100 Euro 22,- Euro/Tag',
		],
		mainSeason: '23.05.2022 - 10.09.2022 und 27.05.2023 - 10.09.2023',
		lowSeason: '04.03.2022 - 22.05.2022 und 11.09.2023 - 26.05.2023 (ohne Himmelfahrt)',
	};

	const equip = [
		{
			text: 'Töpfe, Teller, Besteck',
			icon: '🍽',
		},
		{
			text: 'Tische für 6 Personen',
			icon: '🪑',
		},
		{
			text: 'Gasherd mit zwei Kochplatten',
			icon: '🧯',
		},
		{
			text: 'Kühlschrank 50 L mit kleinem Gefrierfach',
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
			text: 'Zwei Doppelstockbetten 200 x 80 cm',
			icon: '🛏',
		},
		{
			text: 'Klappofa 140 x 200 cm',
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
		let arr = [];
		for (let i in startDate) {
			let dateRange = getDaysArray(new Date(startDate[i]), new Date(endDate[i]));
			arr.push(dateRange.map((date) => date));
		}
		return arr;
	};

	//merge arrays in one array
	const mergeDedupe = (arr) => {
		return [...new Set([].concat(...arr))];
	};

	useEffect(() => {
		const fetchData = async () => {
			const eventList = await getEvents();

			setStartDate(
				eventList
					.filter((ev) => ev.description.includes('Hausboot Rot'))
					.map((event) => event.start)
			);

			setEndDate(
				eventList.filter((ev) => ev.description.includes('Hausboot Rot')).map((event) => event.end)
			);
		};
		fetchData();
	}, []);

	const AllDates = getAllDates();

	return (
		<div className="main">
			<PriceListTitle>Hausboot Rot</PriceListTitle>
			<InfoListComp
				infoArray={equip}
				goToBooking={goToBooking}
				infoListArray={infoListArray}
				place={place}
			/>
			<PriceListComp
				weekendDayprice={160}
				weekendDayprice2={230}
				dayPrice={140}
				dayPrice2={200}
				weekPrice={790}
				weekPrice2={1270}
				weekendWeekPrice={440}
				weekendWeekPrice2={610}
			/>
			<BookingContainer>
				<CalendarWrapper>
					<CalendarLegend>
						<div className="free">Frei</div>
						<div className="booked">Belegt</div>
					</CalendarLegend>
					<BookingCalendar bookings={mergeDedupe(AllDates)} disableHistory={false} />
				</CalendarWrapper>
			</BookingContainer>
			<div ref={bookingRef}>
				<BookingForm hausboot="Rot" booked={mergeDedupe(AllDates)} />
			</div>
		</div>
	);
};

export default HausbootRot;
