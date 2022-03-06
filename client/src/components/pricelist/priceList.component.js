import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
	TextField,
	Select,
	InputLabel,
	FormControl,
	FormControlLabel,
	Checkbox,
	IconButton,
	MenuItem,
	FormLabel,
} from '@mui/material';
import {
	PriceList,
	PriceListContainer,
	PriceListTitle,
	PriceListWrapper,
	PriceListHeader,
	PriceListSeason,
	PriceListItem,
	ConfigWrapper,
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
	const initState = {
		dayPrice: 0,
		dayPrice2: 0,
		dayWPrice: 0,
		dayWPrice2: 0,
		weekPrice: 0,
		weekPrice2: 0,
		grill: 0,
		laundry: 0,
		parking: 0,
		dog: 0,
		gas: 0,
		cleaning: 0,
		shit: 0,
		gasoline: 0,
		liability: 0,
	};
	const [price, setPrice] = useState(initState);
	const [day, setDay] = useState(false);
	const [person, setPerson] = useState(1);
	const [personP, setPersonP] = useState(1);
	const [liability, setLiability] = useState(0);
	const [weekendDay, setWeekendDay] = useState(false);
	const [offerWeek, setOfferWeek] = useState(false);
	const [offerWeekend, setOfferWeekend] = useState(false);
	const [multiDay, setMultiDay] = useState(0);
	const [multiWDay, setMultiWDay] = useState(0);
	const [multiWeekend, setMultiWeekend] = useState(0);
	const [multiWeek, setMultiWeek] = useState(0);
	const [addCost, setAddCost] = useState({});

	const handlePerson = (event) => {
		setPerson(event.target.value);
	};
	const handlePersonParking = (event) => {
		setPersonP(event.target.value);
	};

	const handleLiability = (event) => {
		setLiability(event.target.value);
		setPrice({
			...price,
			liability: event.target.value,
		});
	};
	const handleDayPrice = (event, name) => {
		setOfferWeekend(false);
		setOfferWeek(false);
		if (name === 'weekend') {
			setWeekendDay(event.target.checked);
			if (multiWDay === 0) {
				handleAddMultiDay('weekend');
			}
			if (event.target.checked === true) {
				setPrice({
					...price,
					dayWPrice: weekendDayprice,
					dayWPrice2: weekendDayprice2,
					cleaning: dayPrice ? 50 : 20,
					liability: dayPrice ? liability : 0,
					weekPrice: 0,
					weekPrice2: 0,
				});
			} else {
				setMultiWDay(0);
				setPrice({
					...price,
					dayWPrice: 0,
					dayWPrice2: 0,
					cleaning: 0,
					liability: 0,
				});
			}
		} else {
			if (multiDay === 0) {
				handleAddMultiDay();
			}
			setDay(event.target.checked);
			if (event.target.checked === true) {
				setPrice({
					...price,
					dayPrice: dayPrice,
					dayPrice2: dayPrice2,
					cleaning: dayPrice ? 50 : 20,
					weekPrice: 0,
					weekPrice2: 0,
					liability: dayPrice ? liability : 0,
				});
			} else {
				setMultiDay(0);
				setPrice({
					...price,
					dayPrice: 0,
					dayPrice2: 0,
					cleaning: 0,
					liability: 0,
				});
			}
		}
	};
	const handleOfferPrice = (event, name) => {
		setMultiWDay(0);
		setMultiDay(0);
		setDay(false);
		setWeekendDay(false);
		if (name === 'weekend') {
			setOfferWeek(false);
			setOfferWeekend(event.target.checked);
			if (event.target.checked === true) {
				setMultiWeekend(3);
				setPrice({
					...price,
					dayPrice: 0,
					dayPrice2: 0,
					dayWPrice: 0,
					dayWPrice2: 0,
					weekPrice: weekendWeekPrice,
					weekPrice2: weekendWeekPrice2,
					cleaning: dayPrice ? 50 : 20,
					liability: dayPrice ? liability : 0,
				});
			} else {
				setMultiWeekend(0);
				setPrice({
					...price,
					weekPrice: 0,
					weekPrice2: 0,
					cleaning: 0,
					liability: 0,
				});
			}
		} else {
			setOfferWeekend(false);
			setOfferWeek(event.target.checked);
			if (event.target.checked === true) {
				setMultiWeek(7);
				setPrice({
					...price,
					dayPrice: 0,
					dayPrice2: 0,
					dayWPrice: 0,
					dayWPrice2: 0,
					weekPrice: weekPrice,
					weekPrice2: weekPrice2,
					cleaning: dayPrice ? 50 : 20,
					liability: dayPrice ? liability : 0,
				});
			} else {
				setMultiWeek(0);
				setPrice({
					...price,
					weekPrice: 0,
					weekPrice2: 0,
					cleaning: 0,
					liability: 0,
				});
			}
		}
	};
	const handleAddCosts = (event, name) => {
		if (event.target.checked === true) {
			if (name === 'grill') {
				setAddCost({
					...addCost,
					grill: true,
					gas: true,
				});
				setPrice({
					...price,
					grill: 10,
					gas: dayPrice ? 4 : 10,
				});
			}
			if (name === 'parking') {
				setAddCost({
					...addCost,
					parking: true,
				});
				setPrice({
					...price,
					parking: 3,
				});
			}
			if (name === 'gas') {
				setAddCost({
					...addCost,
					gas: true,
				});
				setPrice({
					...price,
					gas: dayPrice ? 2 : 10,
				});
			}
			if (name === 'dog') {
				setAddCost({
					...addCost,
					dog: true,
				});
				setPrice({
					...price,
					dog: 20,
				});
			}
			if (name === 'laundry') {
				setAddCost({
					...addCost,
					laundry: true,
				});
				setPrice({
					...price,
					laundry: 20,
				});
			}
		} else {
			if (name === 'grill') {
				setAddCost({
					...addCost,
					grill: false,
				});
				setPrice({
					...price,
					grill: 0,
				});
			}
			if (name === 'parking') {
				setAddCost({
					...addCost,
					parking: false,
				});
				setPrice({
					...price,
					parking: 0,
				});
			}
			if (name === 'gas') {
				setAddCost({
					...addCost,
					gas: false,
				});
				setPrice({
					...price,
					gas: 0,
				});
			}
			if (name === 'dog') {
				setAddCost({
					...addCost,
					dog: false,
				});
				setPrice({
					...price,
					dog: 0,
				});
			}
			if (name === 'laundry') {
				setAddCost({
					...addCost,
					laundry: false,
				});
				setPrice({
					...price,
					laundry: 0,
				});
			}
		}
	};
	const handleAddMultiDay = (name) => {
		if (name === 'weekend') {
			if (multiWDay < 4) {
				setMultiWDay(multiWDay + 1);
			}
		} else {
			if (multiDay < 5) {
				setMultiDay(multiDay + 1);
			}
		}
	};
	const handleRemoveMultiDay = (name) => {
		if (name === 'weekend') {
			if (multiWDay > 0) {
				setMultiWDay(multiWDay - 1);
			}
		} else {
			if (multiDay > 0) {
				setMultiDay(multiDay - 1);
			}
		}
	};
	return (
		<div>
			<PriceListContainer>
				<PriceListTitle>Preisliste 2022</PriceListTitle>
				<span className="padding">Von Juli bis August nur Wochenweise buchbar!</span>
				<span className="padding">
					Wähle zur vollständigen Berechnung das zutreffende aus (kann je nach Verbrauch abweichen):{' '}
				</span>
				<PriceListWrapper style={{ marginBottom: '1em' }}>
					<ConfigWrapper>
						<div className="days">
							<div style={{ marginBottom: '1em' }}>Tagespreise:</div>
							<div className="flex">
								<div className="label">
									<FormControlLabel
										style={{ width: '100%' }}
										control={
											<Checkbox
												checked={day}
												color="primary"
												onChange={(e) => handleDayPrice(e)}
												inputProps={{ 'aria-label': 'day checkbox' }}
											/>
										}
										label="Montag bis Freitag"
									/>
								</div>
								<IconButton aria-label="remove" onClick={handleRemoveMultiDay}>
									<RemoveIcon fontSize="large" />
								</IconButton>
								<TextField
									id="outlined-required"
									label={multiDay === 1 ? 'Tag' : 'Tage'}
									size="small"
									InputProps={{ inputProps: { min: 0, max: 10 } }}
									type="number"
									disabled={!day}
									value={multiDay}
									readOnly={true}
								/>
								<IconButton aria-label="add" onClick={handleAddMultiDay}>
									<AddIcon fontSize="large" />
								</IconButton>
							</div>
							<div className="flex">
								<div className="label">
									<FormControlLabel
										style={{ width: '100%' }}
										control={
											<Checkbox
												checked={weekendDay}
												color="primary"
												onChange={(e) => handleDayPrice(e, 'weekend')}
												inputProps={{ 'aria-label': 'day checkbox' }}
											/>
										}
										label="Wochenende"
									/>
								</div>
								<IconButton aria-label="remove" onClick={() => handleRemoveMultiDay('weekend')}>
									<RemoveIcon fontSize="large" />
								</IconButton>
								<TextField
									id="outlined-required"
									label={multiWDay === 1 ? 'Tag' : 'Tage'}
									size="small"
									InputProps={{ inputProps: { min: 0, max: 10 } }}
									type="number"
									disabled={!weekendDay}
									value={multiWDay}
									readOnly={true}
								/>
								<IconButton aria-label="add" onClick={() => handleAddMultiDay('weekend')}>
									<AddIcon fontSize="large" />
								</IconButton>
							</div>
						</div>
						<div className="days" style={{ marginTop: '1em' }}>
							<span>Angebote:</span>
							<div className="flex">
								<div className="label">
									<FormControlLabel
										style={{ width: '100%' }}
										control={
											<Checkbox
												checked={offerWeekend}
												color="primary"
												onChange={(e) => handleOfferPrice(e, 'weekend')}
												inputProps={{ 'aria-label': 'day checkbox' }}
											/>
										}
										label="Wochenende"
									/>
								</div>
							</div>
							<div className="flex">
								<div className="label">
									<FormControlLabel
										style={{ width: '100%' }}
										control={
											<Checkbox
												checked={offerWeek}
												color="primary"
												onChange={(e) => handleOfferPrice(e)}
												inputProps={{ 'aria-label': 'day checkbox' }}
											/>
										}
										label="Eine Woche"
									/>
								</div>
							</div>
						</div>
						<div style={{ marginTop: '1em' }}>
							Zusatzkosten (Standard Zusatzkosten siehe Tabelle):
							<div className="flex">
								<div className="label">
									<FormControlLabel
										style={{ width: '100%' }}
										control={
											<Checkbox
												checked={addCost.grill ?? false}
												color="primary"
												onChange={(e) => handleAddCosts(e, 'grill')}
												inputProps={{ 'aria-label': 'day checkbox' }}
											/>
										}
										label="Gasgrill"
									/>
								</div>
								<div className="label">
									<FormControlLabel
										style={{ width: '100%' }}
										control={
											<Checkbox
												checked={addCost.parking ?? false}
												color="primary"
												onChange={(e) => handleAddCosts(e, 'parking')}
												inputProps={{ 'aria-label': 'day checkbox' }}
											/>
										}
										label="Parkplatz"
									/>
									<FormControl fullWidth>
										<InputLabel>Personen</InputLabel>
										<Select
											style={{ marginRight: '4em' }}
											value={personP}
											label="Personen"
											onChange={handlePersonParking}
											size="small"
											disabled={!addCost.parking ?? false}
										>
											<MenuItem value={1}>1 PKW</MenuItem>
											<MenuItem value={2}>2 PKW</MenuItem>
											<MenuItem value={3}>3 PKW</MenuItem>
											<MenuItem value={4}>4 PKW</MenuItem>
											<MenuItem value={5}>5 PKW</MenuItem>
										</Select>
									</FormControl>
								</div>
								{!dayPrice && (
									<div className="label">
										<FormControlLabel
											style={{ width: '100%' }}
											control={
												<Checkbox
													checked={addCost.gas ?? false}
													color="primary"
													onChange={(e) => handleAddCosts(e, 'gas')}
													inputProps={{ 'aria-label': 'day checkbox' }}
												/>
											}
											label={dayPrice ? 'Gasflasche' : 'Kühlbox/Gasflasche'}
										/>
									</div>
								)}
								{dayPrice && (
									<div className="label">
										<FormControlLabel
											style={{ width: '100%' }}
											control={
												<Checkbox
													checked={addCost.dog ?? false}
													color="primary"
													onChange={(e) => handleAddCosts(e, 'dog')}
													inputProps={{ 'aria-label': 'day checkbox' }}
												/>
											}
											label="mit Hund"
										/>
									</div>
								)}
							</div>
						</div>
						<div style={{ marginTop: '1em' }}>
							<div className="flex-mobile">
								{dayPrice && (
									<div className="selector" style={{ marginRight: '4.3em' }}>
										<FormControlLabel
											style={{ width: '100%' }}
											control={
												<Checkbox
													checked={addCost.laundry ?? false}
													color="primary"
													onChange={(e) => handleAddCosts(e, 'laundry')}
													inputProps={{ 'aria-label': 'day checkbox' }}
												/>
											}
											label="Wäschepacket pro Person"
										/>
										<FormControl fullWidth>
											<InputLabel>Personen</InputLabel>
											<Select
												value={person}
												label="Personen"
												onChange={handlePerson}
												size="small"
												disabled={!addCost.laundry ?? false}
											>
												<MenuItem value={1}>Eine</MenuItem>
												<MenuItem value={2}>Zwei</MenuItem>
												<MenuItem value={3}>Drei</MenuItem>
												<MenuItem value={4}>Vier</MenuItem>
												<MenuItem value={5}>Fünf</MenuItem>
											</Select>
										</FormControl>
									</div>
								)}
								{dayPrice && (
									<div className="selector">
										<FormLabel className="form-label">Haftungsreduzierung</FormLabel>
										<FormControl fullWidth>
											<InputLabel>pro Tag</InputLabel>
											<Select
												value={liability}
												label="Personen"
												onChange={handleLiability}
												size="small"
											>
												<MenuItem value={0}>Ohne</MenuItem>
												<MenuItem value={12}>12</MenuItem>
												<MenuItem value={18}>18</MenuItem>
												<MenuItem value={22}>22</MenuItem>
											</Select>
										</FormControl>
									</div>
								)}
							</div>
						</div>
					</ConfigWrapper>
				</PriceListWrapper>
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
						<PriceListItem className="border" active={price.dayWPrice2 === weekendDayprice2}>
							<div className="week">
								<span className="item">Wochenende pro Tag</span>
							</div>
							{dayPrice && <PriceListSeason>{weekendDayprice},- Euro</PriceListSeason>}
							<PriceListSeason>{weekendDayprice2},- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="border" active={price.dayPrice2 === dayPrice2}>
							<div className="week">
								<span className="item">Montag bis Freitag pro Tag</span>
							</div>
							{dayPrice && <PriceListSeason>{dayPrice},- Euro</PriceListSeason>}
							<PriceListSeason>{dayPrice2},- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="padding">
							<div className="week-header">
								Angebote
								<p className="week-sub">Wochenendpreis ab 10:30 Uhr bis nächsten Tag 10:00 Uhr</p>
								<p className="week-sub">1 Woche ab 15 Uhr bis nächste Woche 10:00 Uhr</p>
							</div>
							{dayPrice && <PriceListSeason />}
							<PriceListSeason />
						</PriceListItem>
						<PriceListItem className="border" active={price.weekPrice2 === weekendWeekPrice2}>
							<div className="week">
								<span className="item">Wochenende Freitag bis Sonntag</span>
							</div>
							{dayPrice && <PriceListSeason>{weekendWeekPrice},- Euro</PriceListSeason>}
							<PriceListSeason>{weekendWeekPrice2},- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="border" active={price.weekPrice2 === weekPrice2}>
							<div className="week">
								<span className="item">1 Woche von Samstag bis Samstag</span>
							</div>
							{dayPrice && <PriceListSeason>{weekPrice},- Euro</PriceListSeason>}
							<PriceListSeason>{weekPrice2},- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="padding">
							<div className="week">Zusatzkosten</div>
							{dayPrice && <PriceListSeason />}
							<PriceListSeason />
						</PriceListItem>

						<PriceListItem className="border" active={price.grill}>
							<div className="week">
								<span className="item">Gasgrill eimalig 10,00 Euro</span>
							</div>
							{dayPrice && <PriceListSeason>10,- Euro</PriceListSeason>}
							<PriceListSeason>10,- Euro</PriceListSeason>
						</PriceListItem>
						{dayPrice && (
							<PriceListItem className="border" active={price.laundry}>
								<div className="week">
									<span className="item">Wäschepaket p.P. 20,00 Euro</span>
								</div>

								{dayPrice && (
									<PriceListSeason>{`${price.laundry * person},- Euro`}</PriceListSeason>
								)}
								<PriceListSeason>{`${price.laundry * person},- Euro`}</PriceListSeason>
							</PriceListItem>
						)}
						<PriceListItem className="border" active={price.parking}>
							<div className="week">
								<span className="item">Parkplatz (eingezäunt) 3,00 Euro/Tag</span>
							</div>
							{dayPrice && (
								<PriceListSeason>{`${
									price.parking * multiDay * personP +
									price.parking * multiWDay * personP +
									price.parking * multiWeekend * personP +
									price.parking * multiWeek * personP
								},- Euro`}</PriceListSeason>
							)}
							<PriceListSeason>{`${
								price.parking * multiDay * personP +
								price.parking * multiWDay * personP +
								price.parking * multiWeekend * personP +
								price.parking * multiWeek * personP
							},- Euro`}</PriceListSeason>
						</PriceListItem>
						<PriceListItem className="border" active={price.liability}>
							<div className="week">
								<span className="item">{`Haftungsreduzierung ${liability},- Euro/Tag`}</span>
							</div>
							{dayPrice && (
								<PriceListSeason>{`${
									price.liability * multiDay +
									price.liability * multiWDay +
									price.liability * multiWeekend +
									price.liability * multiWeek
								},- Euro`}</PriceListSeason>
							)}
							<PriceListSeason>{`${
								price.liability * multiDay +
								price.liability * multiWDay +
								price.liability * multiWeekend +
								price.liability * multiWeek
							},- Euro`}</PriceListSeason>
						</PriceListItem>

						<PriceListItem className="border" active={price.cleaning}>
							<div className="week">
								{dayPrice ? (
									<span className="item">
										{price.dog
											? 'Endreinigung 70,- Euro (mit Hund)'
											: price.cleaning
											? 'Endreinigung 50,- Euro (ohne Hund)'
											: 'Endreinigung (mit Hund) 50,- (70,-) Euro'}
									</span>
								) : (
									<span className="item">Endreinigung 20,- Euro</span>
								)}
							</div>
							{dayPrice && (
								<PriceListSeason>{`${price.dog + price.cleaning},- Euro`}</PriceListSeason>
							)}
							<PriceListSeason>{`${price.dog + price.cleaning},- Euro`}</PriceListSeason>
						</PriceListItem>

						<PriceListItem className="border">
							<div className="week">
								<span className="item">
									Benzin nach Verbrauch aktueller Preis + 0,50 Euro/Liter
								</span>
							</div>
							{dayPrice && (
								<PriceListSeason>
									<p className="week-sub"></p>
								</PriceListSeason>
							)}
							<PriceListSeason>
								<p className="week-sub"></p>
							</PriceListSeason>
						</PriceListItem>
						<PriceListItem active={price.gas} className="border">
							<div className="week">
								{dayPrice ? (
									<span className="item">Gasflasche 4,00 Euro/Tag</span>
								) : (
									<span className="item">
										Große Kühlbox 50L inkl. Gasflasche einmalig 10,- Euro
									</span>
								)}
							</div>
							{dayPrice && (
								<PriceListSeason>{`${
									price.gas * multiDay +
									price.gas * multiWDay +
									price.gas * multiWeekend +
									price.gas * multiWeek
								},- Euro`}</PriceListSeason>
							)}
							{dayPrice ? (
								<PriceListSeason>{`${
									price.gas * multiDay +
									price.gas * multiWDay +
									price.gas * multiWeekend +
									price.gas * multiWeek
								},- Euro`}</PriceListSeason>
							) : (
								<PriceListSeason>{`${price.gas},- Euro`}</PriceListSeason>
							)}
						</PriceListItem>

						<PriceListItem className="border">
							<div className="week">
								<div className="item">Fäkalientankentleerung 25,00 Euro</div>
							</div>
							{dayPrice && <PriceListSeason>25,- Euro</PriceListSeason>}
							<PriceListSeason>25,- Euro</PriceListSeason>
						</PriceListItem>
						<PriceListItem>
							<div className="week">{price.dayPrice ? 'Tage' : ''}</div>
							{dayPrice && (
								<PriceListSeason>
									<h3 className="total">
										{Object.keys(price).length !== 0
											? price.dayPrice * multiDay +
											  price.dayWPrice * multiWDay +
											  price.weekPrice +
											  price.grill +
											  price.liability * multiDay +
											  price.liability * multiWDay +
											  price.liability * multiWeekend +
											  price.liability * multiWeek +
											  price.laundry * person +
											  price.cleaning +
											  price.parking * multiDay * personP +
											  price.parking * multiWDay * personP +
											  price.parking * multiWeekend * personP +
											  price.parking * multiWeek * personP +
											  (price.cleaning ? price.dog : null) +
											  price.gas * multiDay +
											  price.gas * multiWDay +
											  price.gas * multiWeekend +
											  price.gas * multiWeek +
											  price.gasoline
											: 0}{' '}
										Euro
									</h3>
								</PriceListSeason>
							)}
							<PriceListSeason>
								<h3 className="total">
									{dayPrice
										? Object.keys(price).length !== 0
											? price.dayPrice2 * multiDay +
											  price.dayWPrice2 * multiWDay +
											  price.weekPrice2 +
											  price.grill +
											  price.liability * multiDay +
											  price.liability * multiWDay +
											  price.liability * multiWeekend +
											  price.liability * multiWeek +
											  price.gas * multiDay +
											  price.gas * multiWDay +
											  price.gas * multiWeekend +
											  price.gas * multiWeek +
											  price.laundry * person +
											  price.cleaning +
											  price.parking * multiWDay * personP +
											  price.parking * multiDay * personP +
											  price.parking * multiWeekend * personP +
											  price.parking * multiWeek * personP +
											  (price.cleaning ? price.dog : null) +
											  price.gasoline
											: 0
										: Object.keys(price).length !== 0
										? price.dayPrice2 * multiDay +
										  price.dayWPrice2 * multiWDay +
										  price.weekPrice2 +
										  price.grill +
										  price.laundry * person +
										  price.cleaning +
										  price.gas +
										  price.parking * multiWDay * personP +
										  price.parking * multiDay * personP +
										  price.parking * multiWeekend * personP +
										  price.parking * multiWeek * personP +
										  (price.cleaning ? price.dog : null) +
										  price.gasoline
										: 0}{' '}
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
