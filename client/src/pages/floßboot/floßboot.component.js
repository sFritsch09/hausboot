import React, { useState, useEffect, useRef } from 'react';
import { getEvents } from '../../fetch';

import BookingCalendar from 'react-booking-calendar';
import BookingForm from '../../components/form/booking-form.component';
import {
	CalendarWrapper,
	BookingContainer,
	InfoContainer,
	InfoWrapper,
	CalendarLegend,
	PriceListTitle,
	InfoList,
	InfoListItem,
	MenuLink,
	Button,
	InfoSection,
	InfoItem,
	InfoSectionWrapper,
} from './floßboot.styles';
import PriceListComp from 'components/pricelist/priceList.component';

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
		const fetchData = () => {
			// getEvents((events) => setStartDate(events.map((event) => event.start))); //fetch start date
			// getEvents((events) => setEndDate(events.map((event) => event.end))); //fetch end date
			getEvents((events) =>
				setStartDate(
					events
						.filter((ev) => ev.description.includes('Hausboot Floß'))
						.map((event) => event.start)
				)
			);
			getEvents((events) =>
				setEndDate(
					events.filter((ev) => ev.description.includes('Hausboot Floß')).map((event) => event.end)
				)
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
					Ausstattung:
					<span className="week-sub">
						Töpfe, Teller, Besteck und dergleichen sind in der Campingküche an Bord. Auch ein
						Gasherd mit zwei Kochplatten und eine Kühlbox 50L. Das Floß kann im vorderen Bereich mit
						2 Zelten für jeweils 2-3 Personen umgebaut werden. Zelte und Luftmatratzen sind an Bord.
						Im hinteren Bereich befindet sich die Lobby, die ringsum mit Bootsplane verschlossen
						werden kann. Auch ein WC mit Waschbecken ist an Bord.
						<br />
						<br />
						Das Hausboot hat im hinteren Bereich 1Doppelbett 180x200cm. Im vorderen Bereich befindet
						sich auf der linke Seite die Küche und rechts bietet das ausziehbare Sofa 2 weitere
						Schlafplätze.
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
					Saison:
					<span className="week-sub">27.03.2021 - 26.09.2021</span>
					<span className="driver-license">
						Ein Führerschein wird nicht benötigt, da das Hausboot mit einem 15 PS Motor betrieben
						wird und dieser Führerscheinfrei ist. Optimale Besetzung bis zu 18 Personen für das
						Große und 10 Personen für das Kleine.
					</span>
				</InfoWrapper>
				<h2>Auswahl der Speisekarte:</h2>
				<br />
				Gern stellen wir Ihnen für Ihre Feier auch ein Catering zur Verfügung. Alle Speisen und
				Getränke werden Ihnen direkt auf das Boot gebracht, anbei die Speisekarte mit den
				Menüvorschlägen. Weitere Infos zu unserem Menülieferanten und Partner unter:
				Facebook/Gasthofzumfloesser. Link zur Speisekarte:
				<br />
				<div style={{ display: 'flex', padding: '20px' }}>
					<MenuLink to="#">Speisekarte</MenuLink>
				</div>
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
					<BookingCalendar bookings={mergeDedupe(AllDates)} disableHistory />
					<div></div>
				</CalendarWrapper>
			</BookingContainer>
			<div ref={bookingRef}>
				<BookingForm hausboot="Floß" booked={mergeDedupe(AllDates)} />
			</div>
		</div>
	);
};

export default HausbootRot;
