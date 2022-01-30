import React from 'react';
import GoogleMaps from 'simple-react-google-maps';
import ContactForm from '../../components/form/contact-form.component';
import {
	ContactContainer,
	ContactWrapper,
	InfoWrapper,
	MapsContainer,
	Button,
	ImgButton,
} from './contact.styles';

const ContactPage = () => {
	return (
		<div className="main">
			<ContactContainer>
				<InfoWrapper>
					<h2 className="title">Kontaktdaten</h2>
					<div className="phone">René Hellwig Telefon: 0157-39100506</div>
					<div className="phone">Carsten Hellwig Telefon: 0151-10749211</div>
					<h3 className="title">Anfahrt</h3>
					<div className="route">
						Restaurant „Zum Flößer“ Hechtweg 16 16515 Bernöwe Der Oder-Havel-Kanal
					</div>
				</InfoWrapper>
				<ContactWrapper>
					<ContactForm contact />
				</ContactWrapper>
			</ContactContainer>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Button
					to={{ pathname: 'https://goo.gl/maps/DLCabCZqPKq7an6q6' }}
					primary="true"
					target="_blank"
					style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
				>
					<div
						style={{
							width: '15%',
						}}
					>
						<ImgButton
							alt="Maps"
							src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-google-maps-social-media-justicon-flat-justicon.png"
						/>
					</div>
					<div>Maps Öffnen</div>
				</Button>
			</div>
			<MapsContainer>
				<GoogleMaps
					apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
					style={{
						width: '100%',
						color: '#242f3e',
						backgroundColor: '#242f3e',
					}}
					zoom={17}
					center={{ lat: 52.873187733058565, lng: 13.373220204893478 }}
					// markers={{ lat: 52.816640262322035, lng: 13.331743113813927 }}
				/>
			</MapsContainer>
		</div>
	);
};

export default ContactPage;
