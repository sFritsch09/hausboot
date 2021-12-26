import React, { useState, useEffect, useRef } from 'react';
import { getEvents } from '../../fetch';

import BookingCalendar from 'react-booking-calendar';
import BookingForm from '../../components/form/booking-form.component';
import PriceListComp from 'components/pricelist/priceList.component';
import {
	CalendarWrapper,
	BookingContainer,
	InfoContainer,
	InfoWrapper,
	CalendarLegend,
	InfoList,
	InfoListItem,
	InfoSection,
	InfoItem,
	InfoSectionWrapper,
	Button,
	PriceListTitle,
} from './hausboot-rot.styles';

const HausbootRot = () => {
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
			text: 'Zwei Doppelstockbetten 200×80 cm',
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
		const fetchData = () => {
			// getEvents((events) => setStartDate(events.map((event) => event.start))); //fetch start date
			// getEvents((events) => setEndDate(events.map((event) => event.end))); //fetch end date
			getEvents((events) =>
				setStartDate(
					events.filter((ev) => ev.description.includes('Hausboot Rot')).map((event) => event.start)
				)
			);
			getEvents((events) =>
				setEndDate(
					events.filter((ev) => ev.description.includes('Hausboot Rot')).map((event) => event.end)
				)
			);
		};
		fetchData();
	}, []);

	const AllDates = getAllDates();

	return (
		<div className="main">
			<PriceListTitle>Hausboot Rot</PriceListTitle>
			<InfoContainer>
				<Button primary onClick={goToBooking}>
					Direkt Buchen
				</Button>
				<InfoWrapper>
					Ausstattung:
					<span className="week-sub">
						<InfoSection>
							<InfoSectionWrapper>
								{equip.map((item) => (
									<InfoItem key={item.text} icon={item.icon}>
										<div>{item.text}</div>
									</InfoItem>
								))}
							</InfoSectionWrapper>
						</InfoSection>
					</span>
					Inklusiv-Leistungen
					<InfoList>
						<InfoListItem>Haftpflicht und Kasko mit 1000,- Euro Selbstbeteiligung</InfoListItem>
						<InfoListItem>intensive Einweisung im Umgang mit dem Boot, Routenberatung</InfoListItem>
						<InfoListItem>Einweisungsfahrt</InfoListItem>
						<InfoListItem>Informationsmaterial und Reiseunterlagen</InfoListItem>
					</InfoList>
					<span className="week-sub">
						Haftungsreduzierung der Selbstbeteiligung auf 700 Euro 12-Euro/Tag
					</span>
					<span className="week-sub">
						Haftungsreduzierung der Selbstbeteiligung auf 700 Euro 12-Euro/Tag
					</span>
					<span className="week-sub">
						Haftungsreduzierung der Selbstbeteiligung auf 100 Euro 22 Euro/Tag
					</span>
					Nebensaison:
					<span className="week-sub">
						27.03.2021 - 29.05.2021 und 26.09.2021 - 20.05.2022 (ohne Himmelfahrt)
					</span>
					Hauptsaison:
					<span className="week-sub">22.05.2021 - 25.09.2021 und 21.05.2022 - 03.09.2022</span>
					<span className="driver-license">
						Ein Führerschein wird nicht benötigt, da das Hausboot mit einem 15 PS Motor betrieben
						wird und dieser Führerscheinfrei ist.
					</span>
				</InfoWrapper>
			</InfoContainer>
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
				</CalendarWrapper>
			</BookingContainer>
			<div ref={bookingRef}>
				<BookingForm hausboot="Rot" booked={mergeDedupe(AllDates)} />
			</div>
		</div>
	);
};

export default HausbootRot;
