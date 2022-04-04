import styled from 'styled-components';

export const InfoList = styled.ul`
	padding: 10px;
`;

export const InfoListItem = styled.li`
	padding: 10px;
`;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;

		@media screen and (max-width: 900px) {
			padding: 1em;
		}

	.week-sub {
		font-weight: lighter;
		color: ${(props) => props.theme.color};
		font-size: 18px;
		padding: 20px;
		@media screen and (max-width: 900px) {
			font-size: 1em
			text-align: center;
			padding: 1em;
		}
		@media screen and (max-width: 370px) {
			font-size: 8px;
		}
	}
	.driver-license {
		display: flex;
		align-items: center;
		.warning{
			font-size: 2em;
			margin-right: 0.5em;

			@media screen and (max-width: 600px) {
				font-size: 1.6em;
			}
		}
	}
`;

export const InfoContainer = styled.div`
	padding: 2em;
	max-width: 80%;
	margin: 0 15%;

	@media screen and (max-width: 900px) {
		margin: 0;
	}
`;
export const InfoSection = styled.div`
	margin: 0 auto;
	padding: 2em;

	@media screen and (max-width: 900px) {
		padding: 0;
		font-size: 0.5em;
		margin: 0;
		margin-bottom: 1em;
	}
`;
export const InfoSectionWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;

	@media screen and (max-width: 900px) {
		/* justify-content: space-evenly; */
	}
`;
export const InfoPlace = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 900px) {
		h2 {
			font-size: 1.5em;
		}
	}
`;

export const InfoItem = styled.div`
	width: 33%;
	margin-bottom: 15px;
	display: flex;
	align-items: center;

	@media screen and (max-width: 900px) {
		width: 50%;
		margin: 0;
		justify-content: flex-start;
	}

	&:before {
		content: '${(props) => props.icon}';
		display: inline;
		margin-right: 0.75rem;
		font-size: 30px;

		@media screen and (max-width: 900px) {
			padding: 0;
			font-size: 2.5em;
			margin: 0.2em;
		}
	}
`;

export const Button = styled.button`
	border-radius: 4px;
	background: ${(props) => (props.primary ? props.theme.contrastColor : props.theme.Darkcolor)};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: ${(props) => props.theme.color};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	&:hover {
		transition: all 0.3s ease-out;
		color: ${(props) => props.theme.darkColor};
		background: ${(props) => (props.primary ? props.theme.lightColor : props.theme.Darkcolor)};
	}
	@media screen and (max-width: 980px) {
		width: 100%;
	}
`;
