import styled from 'styled-components';

export const PriceListContainer = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	.padding {
		padding: 10px 0;
		@media screen and (max-width: 900px) {
			font-size: 10px;
		}
	}
`;

export const PriceListWrapper = styled.div`
	border-radius: 16px;
	box-sizing: border-box;
	background-color: ${(props) => props.theme.contrastColor};
	color: ${(props) => props.theme.color};
	width: 100%;
	display: flex;
	text-align: center;
	padding: 5px 0;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

	@media screen and (min-width: 900px) {
		max-width: 80%;
	}
	@media screen and (max-width: 900px) {
		font-size: 10px;
		padding: 0 2px;
	}
`;

export const PriceList = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 100%;
	word-break: break-all;
	overflow: hidden;
	.border {
		border-bottom: solid 1px ${(props) => props.theme.darkColor};
	}
	.padding {
		padding: 10px 0;
	}
`;
export const PriceListSeason = styled.div`
	width: 25%;
	display: flex;
	flex-flow: wrap column;
	word-break: break-all;
	overflow: hidden;
	align-items: center;
	@media screen and (max-width: 900px) {
		padding: 0 2px;
	}
	.total {
		justify-content: flex-end;
		align-self: center;
		border-bottom: double 6px ${(props) => props.theme.contrastLight};
		margin-bottom: 10px;
		padding: 20px 0;
	}
`;

export const PriceListHeader = styled.h2`
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	border-bottom: solid 1px ${(props) => props.theme.darkColor};
	margin-bottom: 6px;
	@media screen and (max-width: 900px) {
		font-size: 16px;
	}
	.price-header {
		flex: 1;
		display: flex;
		justify-content: center;
		@media screen and (max-width: 700px) {
			font-size: 12px;
		}
	}
	.season-header {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px 5px;
		@media screen and (max-width: 700px) {
			font-size: 11px;
		}

		.week-sub {
			text-align: center;
			font-weight: lighter;
			color: ${(props) => props.theme.color};
			font-size: 18px;
			@media screen and (max-width: 900px) {
				font-size: 10px;
			}
			@media screen and (max-width: 370px) {
				font-size: 8px;
			}
		}
	}
`;

export const PriceListItem = styled.div`
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	background-color: ${(props) => (props.active ? props.theme.lightColor : null)};
	@media screen and (max-width: 900px) {
		padding: 0 4px;
	}
	.week {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.item {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		word-break: break-word;
		@media screen and (max-width: 900px) {
			font-size: 10px;
		}
	}
	.week-header {
		background-color: ${(props) => props.theme.contrastColor};
		/* filter: brightness(105%); */
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.week-sub {
		font-weight: lighter;
		color: ${(props) => props.theme.color};
		padding: 0 4px;
		word-break: break-word;
		@media screen and (max-width: 380px) {
			font-size: 8px;
		}
	}
`;

export const PriceListTitle = styled.h1`
	display: flex;
	justify-content: center;
	padding-top: 40px;
	@media screen and (max-width: 900px) {
		font-size: 18px;
		padding-top: 20px;
	}
`;
export const ConfigWrapper = styled.div`
	padding: 1em;
	width: 100%;
	@media screen and (max-width: 900px) {
		font-size: 12px;
	}

	span,
	label {
		@media screen and (max-width: 900px) {
			font-size: 1em;
		}
	}
	.days {
		border-bottom: 1px solid ${(props) => props.theme.darkColor};
	}
	.label {
		width: 15%;
		@media screen and (max-width: 900px) {
			width: 50%;
		}
	}
	.selector {
		width: 40%;
		display: flex;
		@media screen and (max-width: 900px) {
			width: 80%;
			margin-bottom: 1em;
		}
	}
	.flex {
		display: flex;
		@media screen and (max-width: 900px) {
			flex-wrap: wrap;
		}
	}
	.flex-mobile {
		display: flex;
		@media screen and (max-width: 900px) {
			flex-direction: column;
		}
	}
	.form-label {
		color: ${(props) => props.theme.color};
		margin-right: 1em;
		margin-top: 0.5em;
	}
`;
