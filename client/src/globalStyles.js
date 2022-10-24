import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
	font-family: 'Montserrat', sans-serif !important;
	font-weight: bold;

	.main{
		background-color: ${(props) => props.theme.darkColor};
		color: ${(props) => props.theme.color};
	}
	
	.page-container{
		display: flex;
  		flex-direction: column;
  		min-height: 100vh;
	}

	.content-wrap{
		flex: 1;
	}
}

`;

export const theme = {
	mode: 'Dark',
	darkColor: '#023047',
	color: '#EDF6F9',
	lightColor: '#8ecae6',
	contrastDark: '#ffb703',
	contrastColor: '#219ebc',
	contrastLight: '#fb8500',
	bookingForm: '#EDF6F9',
	bookingBlue: '#2196f3',
	bookingDarkBlue: '#0960a5',
	bookingYellow: '#ffba08',
	bookingDarkYellow: '#e85d04',
	bookingLightYellow: '#ffd66e',
	bookingRed: '#d00000',
	bookingDarkRed: '#6a040f',
	bookingLightRed: '#ff3737',
	priceColor: '#3434ff',
	wave: '#023047',
	wave1: '#3dbbfa',
	wave3: '#2b91c1',
	wave4: '#035279',
};

export const invertTheme = {
	color: '#023047',
	lightColor: '#fb8500',
	contrastDark: '#219ebc',
	contrastColor: '#ffb703',
	darkColor: '#EDF6F9',
	contrastLight: '#8ecae6',
	bookingForm: '#3e51b5',
	bookingBlue: '#2196f3',
	bookingDarkBlue: '#0960a5',
	bookingYellow: '#ffba08',
	bookingDarkYellow: '#e85d04',
	bookingLightYellow: '#ffd66e',
	bookingRed: '#d00000',
	bookingDarkRed: '#6a040f',
	bookingLightRed: '#ff3737',
	priceColor: '#1E90FF',
	wave: '#8ecae6',
	wave4: '#035279',
	wave1: '#3dbbfa',
	wave3: '#2b91c1',
	wave2: '#60cae3',
};

export default GlobalStyle;
