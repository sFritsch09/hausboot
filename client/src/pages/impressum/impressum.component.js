import React from 'react';
import { ImpContainer, ImpHeader, ImpWrapper } from './impressum.styles';

const Impressum = () => {
	const impAdd = ['Friedrich-Wilhelm-Str. 69', '12103 Berlin'];
	const impTel = ['René Hellwig: Mobil 015739100506', 'Carsten Hellwig: Mobil 015110749211'];

	return (
		<div className="main">
			<ImpContainer>
				<h1 style={{ marginBottom: '2em' }}>Impressum</h1>
				<h2 style={{ marginBottom: '1em' }}>Firma Hellwig & Hellwig GbR</h2>
				{impAdd.map((data) => (
					<div key={data}>{data}</div>
				))}
				<br />
				{impTel.map((data) => (
					<div key={data}>📱 {data}</div>
				))}
				<ImpWrapper>
					<ImpHeader>Hinweis auf EU-Streitschlichtung</ImpHeader> Zur außergerichtlichen Beilegung
					von verbraucherrechtlichen Streitigkeiten hat die Europäische Union eine Online-Plattform
					(“OS-Plattform”) eingerichtet, an die Sie sich wenden können. Die Plattform finden Sie
					unter http://ec.europa.eu/consumers/odr/. Unsere Emailadresse lautet:
					info@hausboot-fahren.info
					<ImpHeader>Disclaimer – rechtliche Hinweise</ImpHeader>§ 1 Warnhinweis zu Inhalten Die
					kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher
					Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die
					Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen
					journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die
					Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein
					durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei
					Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am
					Rechtsbindungswillen des Anbieters.
					<br />§ 2 Externe Links Diese Website enthält Verknüpfungen zu Websites Dritter ("externe
					Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat
					bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin
					überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße
					ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige
					Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links
					bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte
					zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne
					konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen
					werden jedoch derartige externe Links unverzüglich gelöscht.
					<br />§ 3 Urheber- und Leistungsschutzrechte Die auf dieser Website veröffentlichten
					Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
					Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen
					schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt
					insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung
					bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und
					Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
					Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht
					gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den
					persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung
					dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
					<br />§ 4 Besondere Nutzungsbedingungen Soweit besondere Bedingungen für einzelne
					Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an
					entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im
					jeweiligen Einzelfall die besonderen Nutzungsbedingungen.{' '}
					<ImpHeader>Datenschutzerklärung</ImpHeader> <ImpHeader>Datenschutz</ImpHeader>
					Nachfolgend möchten wir Sie über unsere Datenschutzerklärung informieren. Sie finden hier
					Informationen über die Erhebung und Verwendung persönlicher Daten bei der Nutzung unserer
					Webseite. Wir beachten dabei das für Deutschland geltende Datenschutzrecht. Sie können
					diese Erklärung jederzeit auf unserer Webseite abrufen. Wir weisen ausdrücklich darauf
					hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
					Sicherheitslücken aufweisen und nicht lückenlos vor dem Zugriff durch Dritte geschützt
					werden kann. Die Verwendung der Kontaktdaten unseres Impressums zur gewerblichen Werbung
					ist ausdrücklich nicht erwünscht, es sei denn wir hatten zuvor unsere schriftliche
					Einwilligung erteilt oder es besteht bereits eine Geschäftsbeziehung. Der Anbieter und
					alle auf dieser Website genannten Personen widersprechen hiermit jeder kommerziellen
					Verwendung und Weitergabe ihrer Daten.
					<ImpHeader>Personenbezogene Daten</ImpHeader>
					Sie können unsere Webseite ohne Angabe personenbezogener Daten besuchen. Soweit auf
					unseren Seiten personenbezogene Daten (wie Name, Anschrift oder E-Mail Adresse) erhoben
					werden, erfolgt dies, soweit möglich, auf freiwilliger Basis. Diese Daten werden ohne Ihre
					ausdrückliche Zustimmung nicht an Dritte weitergegeben. Sofern zwischen Ihnen und uns ein
					Vertragsverhältnis begründet, inhaltlich ausgestaltet oder geändert werden soll oder Sie
					an uns eine Anfrage stellen, erheben und verwenden wir personenbezogene Daten von Ihnen,
					soweit dies zu diesen Zwecken erforderlich ist (Bestandsdaten). Wir erheben, verarbeiten
					und nutzen personenbezogene Daten soweit dies erforderlich ist, um Ihnen die
					Inanspruchnahme des Webangebots zu ermöglichen (Nutzungsdaten). Sämtliche
					personenbezogenen Daten werden nur solange gespeichert wie dies für den genannten Zweck
					(Bearbeitung Ihrer Anfrage oder Abwicklung eines Vertrags) erforderlich ist. Hierbei
					werden steuer- und handelsrechtliche Aufbewahrungsfristen berücksichtigt. Auf Anordnung
					der zuständigen Stellen dürfen wir im Einzelfall Auskunft über diese Daten (Bestandsdaten)
					erteilen, soweit dies für Zwecke der Strafverfolgung, zur Gefahrenabwehr, zur Erfüllung
					der gesetzlichen Aufgaben der Verfassungsschutzbehörden oder des Militärischen
					Abschirmdienstes oder zur Durchsetzung der Rechte am geistigen Eigentum erforderlich ist.{' '}
					<ImpHeader>Auskunftsrecht</ImpHeader>
					Sie haben das jederzeitige Recht, sich unentgeltlich und unverzüglich über die zu Ihrer
					Person erhobenen Daten zu erkundigen. Sie haben das jederzeitige Recht, Ihre Zustimmung
					zur Verwendung Ihrer angegeben persönlichen Daten mit Wirkung für die Zukunft zu
					widerrufen. Zur Auskunftserteilung wenden Sie sich bitte an den Anbieter unter den
					Kontaktdaten im Impressum. Quelle: Impressumsgenerator von juraforum.de
				</ImpWrapper>
			</ImpContainer>
		</div>
	);
};

export default Impressum;
