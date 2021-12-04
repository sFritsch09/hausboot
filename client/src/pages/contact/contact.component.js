import React from 'react';
import GoogleMaps from 'simple-react-google-maps';
import ContactForm from '../../components/form/contact-form.component';
import { ContactContainer, ContactWrapper, InfoWrapper, MapsContainer } from './contact.styles';

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
			<MapsContainer>
				<GoogleMaps
					apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
					style={{
						width: '100%',
						color: '#242f3e',
						backgroundColor: '#242f3e',
					}}
					zoom={17}
					center={{ lat: 52.816940262322035, lng: 13.331603113813927 }}
					// markers={{ lat: 52.816640262322035, lng: 13.331743113813927 }}
					mapId="af3ac2372aa62406"
				/>
			</MapsContainer>
		</div>
	);
};

export default ContactPage;
