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
	PriceListContainer,
	PriceListWrapper,
	PriceListItem,
	PriceListSeason,
	PriceListHeader,
	PriceList,
	PriceListTitle,
	InfoList,
	InfoListItem,
	MenuLink,
	Button,
	InfoSection,
	InfoItem,
	InfoSectionWrapper,
} from './floßboot.styles';

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
	const [price, setPrice] = useState({
		dayPrice: 0,
		weekPrice: 0,
		grill: 0,
		laundry: 0,
		parking: 0,
		cleaning: 20,
		gas: 0,
		gasoline: 0,
	});
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
			<PriceListContainer>
				<PriceListTitle>Preisliste 2022</PriceListTitle>
				<span className="padding">
					Wähle zur vollständigen Berechnung das zutreffende aus (kann je nach Verbrauch abweichen):{' '}
				</span>
				<PriceListWrapper>
					<PriceList>
						<PriceListHeader>
							<span className="price-header">Preise</span>
							<span className="season-header">Summe</span>
						</PriceListHeader>
						<PriceListItem className="padding">
							<div className="week-header">
								Tagespreis
								<p className="week-sub">Tagespreis ab 10:00 Uhr bis 19:00 Uhr</p>
							</div>
							<PriceListSeason />
						</PriceListItem>
						<PriceListItem
							className="border"
							active2={price.dayPrice}
							clickable
							onClick={() =>
								setPrice({
									...price,
									dayPrice: 250,
									weekPrice: 0,
									gas: 2,
								})
							}
						>
							<div className="week">
								<span className="item">Freitag bis Sonntag inkl. 20 L Sprit</span>
							</div>
							<PriceListSeason>250,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.dayPrice}
							clickable
							onClick={() =>
								setPrice({
									...price,
									dayPrice: 179,
									weekPrice: 0,
									gas: 2,
								})
							}
						>
							<div className="week">
								<span className="item">Montag bis Donnerstag inkl. 20 L Sprit</span>
							</div>
							<PriceListSeason>179,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="padding">
							<div className="week-header">
								Wochenendpreis
								<p className="week-sub">Wochenendpreis ab 10:00 Uhr bis nächsten Tag 10:00 Uhr</p>
								<p className="week-sub">1 Woche ab 15 Uhr bis nächste Woche 10:00 Uhr</p>
							</div>
							<PriceListSeason />
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.weekPrice}
							clickable
							onClick={() =>
								setPrice({
									...price,
									weekPrice: 450,
									dayPrice: 0,
									gas: 6,
								})
							}
						>
							<div className="week">
								<span className="item">Freitag bis Sonntag</span>
							</div>
							<PriceListSeason>450,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem
							className="border"
							active2={price.weekPrice}
							clickable
							onClick={() =>
								setPrice({
									...price,
									weekPrice: 750,
									dayPrice: 0,
									gas: 14,
								})
							}
						>
							<div className="week">
								<span className="item">1 Woche von Samstag bis Samstag</span>
							</div>
							<PriceListSeason>750,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="padding">
							<div className="week">Zusatzkosten</div>
							<PriceListSeason />
						</PriceListItem>

						<PriceListItem
							className="border"
							active={price.grill}
							clickable
							onClick={() =>
								price.grill === 20
									? setPrice({ ...price, grill: 0 })
									: setPrice({ ...price, grill: 20 })
							}
						>
							<div className="week">
								<span className="item">Großer Gasgrill eimalig 20,00 Euro</span>
							</div>
							<PriceListSeason>20,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.laundry}
							clickable
							onClick={() =>
								price.laundry === 20
									? setPrice({ ...price, laundry: 0 })
									: setPrice({ ...price, laundry: 20 })
							}
						>
							<div className="week">
								<span className="item">Wäschepaket p.P. 20,00 Euro</span>
							</div>
							<PriceListSeason>20,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.parking}
							clickable
							onClick={() =>
								price.parking === 3
									? setPrice({ ...price, parking: 0 })
									: setPrice({ ...price, parking: 3 })
							}
						>
							<div className="week">
								<span className="item">Parkplatz (eingezäunt) 3,00 Euro/Tag</span>
							</div>
							<PriceListSeason>{price.dayPrice !== 0 ? '3,- Euro' : '9,- Euro'}</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="border">
							<div className="week">
								<span className="item">Benzin nach Verbrauch 2,40 Euro/Liter</span>
							</div>
							<PriceListSeason />
						</PriceListItem>
						<PriceListItem className="border">
							<div className="week">
								<span className="item">Gasflasche 2,00 Euro/Tag</span>
							</div>
							<PriceListSeason>
								{price.gas === 14 ? '14,- Euro' : price.gas === 6 ? '6,- Euro' : '2,- Euro'}
							</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="border">
							<div className="week">
								<span className="item">Endreinigung</span>
							</div>
							<PriceListSeason>20,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="border">
							<div className="week">
								<span className="item">Fäkalientankentleerung 25,00 Euro</span>
							</div>
							<PriceListSeason>25,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem>
							<div className="week"></div>
							<PriceListSeason>
								<h3 className="total">
									{price.dayPrice +
										price.weekPrice +
										price.grill +
										price.laundry +
										price.parking +
										price.cleaning +
										price.gas +
										price.gasoline +
										25}{' '}
									Euro
								</h3>
							</PriceListSeason>
						</PriceListItem>
					</PriceList>
				</PriceListWrapper>
			</PriceListContainer>
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
