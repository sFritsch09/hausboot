import styled from 'styled-components';

export const ContactContainer = styled.div`
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 980px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const InfoWrapper = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0 60px;

	@media screen and (max-width: 980px) {
		width: fit-content;
		padding: 0 2em;
	}
	.title {
		padding: 20px 0;
	}
	.phone {
		padding: 10px;
		align-self: flex-start;
	}

	.route {
		padding: 10px;
	}
`;

export const ContactWrapper = styled.div`
	width: 70%;
	@media screen and (max-width: 980px) {
		width: 70%;
		margin: 2em 8em;
	}
`;

export const MapsContainer = styled.div`
	padding: 20px 60px;
	display: flex;
	justify-content: center;
	height: 500px;
`;
