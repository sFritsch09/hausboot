import React from 'react';
import { ImpContainer } from './impressum.styles';

const Impressum = () => {
	const impAdd = ['Friedrich-W ilhelm-Str. 69', '12103 Berlin'];
	const impTel = ['René Hellwig: Mobil 015739100506', 'Carsten Hellwig: Mobil 015110749211'];

	return (
		<div className="main">
			<ImpContainer>
				<h1 style={{ marginBottom: '2em' }}>Impressum</h1>
				<h2 style={{ marginBottom: '1em' }}>Firma Hellwig & Hellwig GbR</h2>
				{impAdd.map((data) => (
					<div>{data}</div>
				))}
				<br />
				{impTel.map((data) => (
					<div>📱 {data}</div>
				))}
			</ImpContainer>
		</div>
	);
};

export default Impressum;
