import styled from 'styled-components';

export const BookedContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 120px;
`;

export const BookedWrapper = styled.div`
	box-sizing: border-box;
	margin: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 900px) {
		margin: 20px;
	}
	@media screen and (max-width: 450px) {
		font-size: 15px;
	}
`;

export const GifWrapper = styled.img`
	max-width: 100%;
	@media screen and (max-width: 900px) {
		max-width: 80%;
	}
`;

export const BookedDetails = styled.div`
	margin: 10px;
	font-size: 28px;
`;

export const BookedDetailsWrapper = styled.div`
	border-radius: 16px;
	box-sizing: border-box;
	background-color: ${(props) => props.theme.contrastColor};
	color: ${(props) => props.theme.color};
	width: 100%;
	display: flex;
	text-align: center;
	flex-direction: column;
	.border {
		border-bottom: solid 1px ${(props) => props.theme.darkColor};
	}
	.padding {
		padding: 10px 0;
	}
`;

export const BookedList = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
	word-break: break-all;
	overflow: hidden;
`;

export const BookedListItem = styled.div`
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
`;
