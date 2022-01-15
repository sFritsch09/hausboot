import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper, Imgage, Angle, ReviewContainer } from './homepage.styles';
import LayoutCards from '../../components/review/card.component';

const HomePage = () => {
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
						<div>
							<Imgage
								imageSrc={
									'https://hausbootprod.blob.core.windows.net/hausboot-images/Hausboot-blau-dock.jpeg'
								}
							/>
						</div>
					</div>
					<div>
						<Imgage
							imageSrc={
								'https://hausbootprod.blob.core.windows.net/hausboot-images/Hausboot-sunset.jpeg'
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
			<ReviewContainer>
				<LayoutCards />
			</ReviewContainer>
		</div>
	);
};

export default HomePage;
