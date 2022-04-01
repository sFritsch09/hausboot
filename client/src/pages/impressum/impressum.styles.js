import styled from 'styled-components';

export const ImpContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 6% 0;
	margin: 0 auto;
	max-width: 1200px;
	padding-bottom: 100%;

	@media screen and (max-width: 900px) {
		padding: 2em;
	}
`;

export const ImpWrapper = styled.div`
	margin: 2em 0;
`;

export const ImpHeader = styled.div`
	margin: 1em 0;
	font-size: 21px;
`;
