import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper, Imgage, Angle, ReviewContainer, YoutubeWrapper } from './homepage.styles';
import LayoutCards from '../../components/review/card.component';
import YouTube from 'react-youtube';
import useWindowSize from '../../components/hooks/useMobile';

const HomePage = () => {
	const size = useWindowSize();

	const opts = {
		width: '100%',
		height: size.width < 900 ? '100%' : '450px',
		playerVars: {
			autoplay: 1,
			utoplay: 1,
			controls: 0,
			rel: 0,
			showinfo: 0,
			mute: 1,
			loop: 1,
		},
	};
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 6000,
		easing: 'easeOutElastic',
		arrows: false,
		pauseOnHover: true,
	};
	return (
		<div className="main">
			<SliderWrapper>
				<Slider {...settings}>
					<div>
						<Imgage
							imageSrc={
								size.width < 900
									? 'https://hausbootprod.blob.core.windows.net/hausboot-images/home-mobile.jpg'
									: 'https://hausbootprod.blob.core.windows.net/hausboot-images/hompage-blau.jpg'
							}
						/>
					</div>
					<div>
						<Imgage
							imageSrc={
								'https://hausbootprod.blob.core.windows.net/hausboot-images/View-river2.jpg'
							}
						/>
					</div>
					<div>
						<Imgage
							imageSrc={'https://hausbootprod.blob.core.windows.net/hausboot-images/View-pond.jpg'}
						/>
					</div>
					<div>
						<Imgage
							imageSrc={
								'https://hausbootprod.blob.core.windows.net/hausboot-images/View-sluice.jpg'
							}
						/>
					</div>
				</Slider>
			</SliderWrapper>
			<Angle />
			<YoutubeWrapper>
				<div className="youtube">
					<YouTube videoId="j7-wyGGB1x0" opts={opts} />
				</div>
			</YoutubeWrapper>
			<ReviewContainer>
				<LayoutCards />
			</ReviewContainer>
		</div>
	);
};

export default HomePage;
