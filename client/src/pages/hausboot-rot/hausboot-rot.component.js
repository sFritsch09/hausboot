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
	InfoSection,
	InfoItem,
	InfoSectionWrapper,
	Button,
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

	const [price, setPrice] = useState({
		dayPrice: 0,
		dayPrice2: 0,
		weekPrice: 0,
		weekPrice2: 0,
		grill: 0,
		laundry: 0,
		parking: 0,
		dog: 0,
		gas: 0,
		gasoline: 50,
	});
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
			<PriceListContainer>
				<PriceListTitle>Preisliste 2022</PriceListTitle>
				<span className="padding">
					Wähle zur vollständigen Berechnung das zutreffende aus (kann je nach Verbrauch abweichen):{' '}
				</span>
				<PriceListWrapper>
					<PriceList>
						<PriceListHeader>
							<span className="price-header">Preise</span>
							<span className="season-header">Nebensaison</span>
							<span className="season-header">Hauptsaison</span>
						</PriceListHeader>
						<PriceListItem className="padding">
							<div className="week-header">
								Tagespreis
								<p className="week-sub">Tagespreis ab 10:30 Uhr bis nächsten Tag 10:00 Uhr</p>
							</div>
							<PriceListSeason />
							<PriceListSeason />
						</PriceListItem>
						<PriceListItem
							className="border"
							active2={price.dayPrice}
							clickable
							onClick={() =>
								setPrice({
									...price,
									dayPrice: 150,
									dayPrice2: 230,
									weekPrice: 0,
									weekPrice2: 0,
									gas: 2,
								})
							}
						>
							<div className="week">
								<span className="item">Freitag bis Sonntag</span>
							</div>
							<PriceListSeason>150,- Euro</PriceListSeason>
							<PriceListSeason>230,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.dayPrice}
							clickable
							onClick={() =>
								setPrice({
									...price,
									dayPrice: 130,
									dayPrice2: 200,
									weekPrice: 0,
									weekPrice2: 0,
									gas: 2,
								})
							}
						>
							<div className="week">
								<span className="item">Montag bis Donnerstag</span>
							</div>
							<PriceListSeason>130,- Euro</PriceListSeason>
							<PriceListSeason>200,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="padding">
							<div className="week-header">
								Wochenendpreis
								<p className="week-sub">Wochenendpreis ab 10:30 Uhr bis nächsten Tag 10:00 Uhr</p>
								<p className="week-sub">1 Woche ab 15 Uhr bis nächste Woche 10:00 Uhr</p>
							</div>
							<PriceListSeason />
							<PriceListSeason />
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.weekPrice}
							clickable
							onClick={() =>
								setPrice({
									...price,
									weekPrice: 420,
									weekPrice2: 590,
									dayPrice: 0,
									dayPrice2: 0,
									gas: 6,
									gasoline: 150,
								})
							}
						>
							<div className="week">
								<span className="item">Freitag bis Sonntag</span>
							</div>
							<PriceListSeason>420,- Euro</PriceListSeason>
							<PriceListSeason>590,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem
							className="border"
							active2={price.weekPrice}
							clickable
							onClick={() =>
								setPrice({
									...price,
									weekPrice: 710,
									weekPrice2: 1190,
									dayPrice: 0,
									dayPrice2: 0,
									gas: 14,
									gasoline: 350,
								})
							}
						>
							<div className="week">
								<span className="item">1 Woche von Samstag bis Samstag</span>
							</div>
							<PriceListSeason>710,- Euro</PriceListSeason>
							<PriceListSeason>1190,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="padding">
							<div className="week">Zusatzkosten</div>
							<PriceListSeason />
							<PriceListSeason />
						</PriceListItem>

						<PriceListItem
							className="border"
							active={price.grill}
							clickable
							onClick={() =>
								price.grill === 5
									? setPrice({ ...price, grill: 0 })
									: setPrice({ ...price, grill: 5 })
							}
						>
							<div className="week">
								<span className="item">Kugelgrill eimalig 5,00 Euro</span>
							</div>
							<PriceListSeason>5,- Euro</PriceListSeason>
							<PriceListSeason>5,- Euro</PriceListSeason>
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
							<PriceListSeason>{price.dayPrice !== 0 ? '3,- Euro' : '9,- Euro'}</PriceListSeason>
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.dog}
							clickable
							onClick={() =>
								price.dog === 50 ? setPrice({ ...price, dog: 70 }) : setPrice({ ...price, dog: 50 })
							}
						>
							<div className="week">
								<span className="item">
									{price.dog === 50
										? 'Endreinigung 50,- Euro (ohne Hund)'
										: price.dog === 70
										? 'Endreinigung 70,- Euro (mit Hund)'
										: 'Endreinigung (mit Hund) 50,- (70,-) Euro'}
								</span>
							</div>
							<PriceListSeason>{price.dog <= 50 ? '50,- Euro' : '70,- Euro'}</PriceListSeason>
							<PriceListSeason>{price.dog <= 50 ? '50,- Euro' : '70,- Euro'}</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="border">
							<div className="week">
								<span className="item">Benzin nach Verbrauch 2,40 Euro/Liter</span>
							</div>
							<PriceListSeason>
								50,- Euro
								<p className="week-sub">Pauschalpreis pro Tag</p>
							</PriceListSeason>
							<PriceListSeason>
								50,- Euro
								<p className="week-sub">Pauschalpreis pro Tag</p>
							</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="border">
							<div className="week">
								<span className="item">Gasflasche 2,00 Euro/Tag</span>
							</div>
							<PriceListSeason>
								{price.gas === 14 ? '14,- Euro' : price.gas === 6 ? '6,- Euro' : '2,- Euro'}
							</PriceListSeason>
							<PriceListSeason>
								{price.gas === 14 ? '14,- Euro' : price.gas === 6 ? '6,- Euro' : '2,- Euro'}
							</PriceListSeason>
						</PriceListItem>

						<PriceListItem className="border">
							<div className="week">
								<span className="item">Fäkalientankentleerung 25,00 Euro</span>
							</div>
							<PriceListSeason>25,- Euro</PriceListSeason>
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
										price.dog +
										price.gas +
										price.gasoline +
										25}{' '}
									Euro
								</h3>
							</PriceListSeason>
							<PriceListSeason>
								<h3 className="total">
									{price.dayPrice2 +
										price.weekPrice2 +
										price.grill +
										price.laundry +
										price.parking +
										price.dog +
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
