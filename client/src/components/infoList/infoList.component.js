import React from 'react';
import {
	InfoContainer,
	InfoWrapper,
	InfoSection,
	InfoSectionWrapper,
	InfoListItem,
	InfoList,
	InfoItem,
	Button,
} from './infoList.styles';

const InfoListComp = ({ title, infoArray, infoListArray, goToBooking }) => {
	return (
		<div>
			<InfoContainer>
				<Button primary onClick={goToBooking}>
					Direkt Buchen
				</Button>
				<InfoWrapper>
					Ausstattung:
					<InfoSection>
						<InfoSectionWrapper>
							{infoArray.map((item) => (
								<InfoItem key={item.text} icon={item.icon}>
									<div>{item.text}</div>
								</InfoItem>
							))}
						</InfoSectionWrapper>
					</InfoSection>
					Inklusiv-Leistungen
					{infoListArray.map((item) => (
						<React.Fragment>
							{item.service.map((serv) => (
								<InfoList>
									<InfoListItem>{serv}</InfoListItem>
								</InfoList>
							))}
							{item.insurance.map((ins) => (
								<span className="week-sub">{ins}</span>
							))}
							{item.mainSeason && 'Hauptsaison:'}
							<span className="week-sub">{item.mainSeason}</span>
							{item.lowSeason && 'Nebensaison:'}
							<span className="week-sub">{item.lowSeason}</span>
						</React.Fragment>
					))}
					<span className="driver-license">
						Ein Führerschein wird nicht benötigt, da das Hausboot mit einem 15 PS Motor betrieben
						wird und dieser Führerscheinfrei ist.
					</span>
				</InfoWrapper>
			</InfoContainer>
		</div>
	);
};

export default InfoListComp;
