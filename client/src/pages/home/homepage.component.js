import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper, Imgage, Angle, ReviewContainer } from './homepage.styles';
import LayoutCards from '../../components/review/card.component';

import HouseboatBlue from 'assets/houseboatBlue.jpeg';
import HouseboatGang from 'assets/houseboatGang.jpeg';

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
							<Imgage imageSrc={HouseboatBlue} />
						</div>
					</div>
					<div>
						<Imgage imageSrc={HouseboatGang} />
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
