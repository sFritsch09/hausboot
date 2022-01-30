import React, { useState } from 'react';
import {
	PriceList,
	PriceListContainer,
	PriceListTitle,
	PriceListWrapper,
	PriceListHeader,
	PriceListSeason,
	PriceListItem,
} from './priceList.styles';

const PriceListComp = ({
	weekendDayprice,
	weekendDayprice2,
	dayPrice,
	dayPrice2,
	weekPrice,
	weekPrice2,
	weekendWeekPrice,
	weekendWeekPrice2,
}) => {
	const [price, setPrice] = useState({
		dayPrice: 0,
		dayPrice2: 0,
		weekPrice: 0,
		weekPrice2: 0,
		grill: 0,
		laundry: 0,
		parking: 0,
		dog: 50,
		gas: 0,
		gasoline: 50,
	});
	return (
		<div>
			<PriceListContainer>
				<PriceListTitle>Preisliste 2022</PriceListTitle>
				<span className="padding">
					Wähle zur vollständigen Berechnung das zutreffende aus (kann je nach Verbrauch abweichen):{' '}
				</span>
				<PriceListWrapper>
					<PriceList>
						<PriceListHeader>
							<span className="price-header">Preise</span>
							{dayPrice && <span className="season-header">Nebensaison</span>}

							<span className="season-header">Hauptsaison</span>
						</PriceListHeader>
						<PriceListItem className="padding">
							<div className="week-header">
								Tagespreis
								<p className="week-sub">Tagespreis ab 10:30 Uhr bis nächsten Tag 10:00 Uhr</p>
							</div>
							{dayPrice && <PriceListSeason />}
							<PriceListSeason />
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.dayPrice2 === weekendDayprice2}
							clickable
							onClick={() =>
								setPrice({
									...price,
									dayPrice: weekendDayprice,
									dayPrice2: weekendDayprice2,
									parking: 3,
									weekPrice: 0,
									weekPrice2: 0,
									gas: 2,
								})
							}
						>
							<div className="week">
								<span className="item">Freitag bis Sonntag</span>
							</div>
							{dayPrice && <PriceListSeason>{weekendDayprice},- Euro</PriceListSeason>}
							<PriceListSeason>{weekendDayprice2},- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.dayPrice2 === dayPrice2}
							clickable
							onClick={() =>
								setPrice({
									...price,
									dayPrice: dayPrice,
									dayPrice2: dayPrice2,
									parking: 3,
									weekPrice: 0,
									weekPrice2: 0,
									gas: 2,
								})
							}
						>
							<div className="week">
								<span className="item">Montag bis Donnerstag</span>
							</div>
							{dayPrice && <PriceListSeason>{dayPrice},- Euro</PriceListSeason>}
							<PriceListSeason>{dayPrice2},- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="padding">
							<div className="week-header">
								Wochenendpreis
								<p className="week-sub">Wochenendpreis ab 10:30 Uhr bis nächsten Tag 10:00 Uhr</p>
								<p className="week-sub">1 Woche ab 15 Uhr bis nächste Woche 10:00 Uhr</p>
							</div>
							{dayPrice && <PriceListSeason />}
							<PriceListSeason />
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.weekPrice2 === weekPrice2}
							clickable
							onClick={() =>
								setPrice({
									...price,
									weekPrice: weekPrice,
									weekPrice2: weekPrice2,
									parking: 9,
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
							{dayPrice && <PriceListSeason>{weekPrice},- Euro</PriceListSeason>}
							<PriceListSeason>{weekPrice2},- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.weekPrice2 === weekendWeekPrice2}
							clickable
							onClick={() =>
								setPrice({
									...price,
									weekPrice: weekendWeekPrice,
									weekPrice2: weekendWeekPrice2,
									parking: 21,
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
							{dayPrice && <PriceListSeason>{weekendWeekPrice},- Euro</PriceListSeason>}
							<PriceListSeason>{weekendWeekPrice2},- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="padding">
							<div className="week">Zusatzkosten</div>
							{dayPrice && <PriceListSeason />}
							<PriceListSeason />
						</PriceListItem>

						<PriceListItem
							className="border"
							active={price.grill}
							clickable
							onClick={() =>
								price.grill === 10
									? setPrice({ ...price, grill: 0 })
									: setPrice({ ...price, grill: 10 })
							}
						>
							<div className="week">
								<span className="item">Gasgrill eimalig 10,00 Euro</span>
							</div>
							{dayPrice && <PriceListSeason>10,- Euro</PriceListSeason>}
							<PriceListSeason>10,- Euro</PriceListSeason>
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

							{dayPrice && <PriceListSeason>20,- Euro</PriceListSeason>}
							<PriceListSeason>20,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem
							className="border"
							active={price.parking}
							clickable
							onClick={() =>
								price.parking
									? setPrice({ ...price, parking: 0 })
									: price.weekPrice === weekendWeekPrice
									? setPrice({ ...price, parking: 21 })
									: price.weekPrice === weekPrice
									? setPrice({ ...price, parking: 9 })
									: setPrice({ ...price, parking: 3 })
							}
						>
							<div className="week">
								<span className="item">Parkplatz (eingezäunt) 3,00 Euro/Tag</span>
							</div>
							{dayPrice && <PriceListSeason>{`${price.parking},- Euro`}</PriceListSeason>}
							<PriceListSeason>{`${price.parking},- Euro`}</PriceListSeason>
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
							{dayPrice && (
								<PriceListSeason>{price.dog <= 50 ? '50,- Euro' : '70,- Euro'}</PriceListSeason>
							)}
							<PriceListSeason>{price.dog <= 50 ? '50,- Euro' : '70,- Euro'}</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="border">
							<div className="week">
								<span className="item">Benzin nach Verbrauch 2,40 Euro/Liter</span>
							</div>
							{dayPrice && (
								<PriceListSeason>
									50,- Euro
									<p className="week-sub">Pauschalpreis pro Tag</p>
								</PriceListSeason>
							)}
							<PriceListSeason>
								50,- Euro
								<p className="week-sub">Pauschalpreis pro Tag</p>
							</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="border">
							<div className="week">
								<span className="item">Gasflasche 2,00 Euro/Tag</span>
							</div>
							{dayPrice && (
								<PriceListSeason>
									{price.gas === 14 ? '14,- Euro' : price.gas === 6 ? '6,- Euro' : '2,- Euro'}
								</PriceListSeason>
							)}
							<PriceListSeason>
								{price.gas === 14 ? '14,- Euro' : price.gas === 6 ? '6,- Euro' : '2,- Euro'}
							</PriceListSeason>
						</PriceListItem>

						<PriceListItem className="border">
							<div className="week">
								<span className="item">Fäkalientankentleerung 25,00 Euro</span>
							</div>
							{dayPrice && <PriceListSeason>25,- Euro</PriceListSeason>}
							<PriceListSeason>25,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem>
							<div className="week"></div>
							{dayPrice && (
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
							)}
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
		</div>
	);
};

export default PriceListComp;
