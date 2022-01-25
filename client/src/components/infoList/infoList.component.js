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

const InfoListComp = ({ infoArray, infoListArray, goToBooking }) => {
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
								<InfoItem key={item.icon} icon={item.icon}>
									<div key={item.text}>{item.text}</div>
								</InfoItem>
							))}
						</InfoSectionWrapper>
					</InfoSection>
					Inklusiv-Leistungen
					{infoListArray.map((item) => (
						<React.Fragment key={item}>
							{item.service.map((serv) => (
								<InfoList key={serv}>
									<InfoListItem key={serv}>{serv}</InfoListItem>
								</InfoList>
							))}
							{item.insurance.map((ins) => (
								<span key={ins} className="week-sub">
									{ins}
								</span>
							))}
							{item.mainSeason && 'Hauptsaison:'}
							<span key={item.mainSeason} className="week-sub">
								{item.mainSeason}
							</span>
							{item.lowSeason && 'Nebensaison:'}
							<span key={item.lowSeason} className="week-sub">
								{item.lowSeason}
							</span>
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
