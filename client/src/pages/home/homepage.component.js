import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
	SliderWrapper,
	Imgage,
	Angle,
	ReviewContainer,
	YoutubeWrapper,
	Button,
} from './homepage.styles';
import LayoutCards from '../../components/review/card.component';
import useWindowSize from '../../components/hooks/useMobile';

const HomePage = () => {
	const size = useWindowSize();

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
									? 'https://hausboot.fra1.digitaloceanspaces.com/home-mobile.jpg'
									: 'https://hausboot.fra1.digitaloceanspaces.com/hompage-blau.jpg'
							}
						/>
					</div>
					<div>
						<Imgage imageSrc={'https://hausboot.fra1.digitaloceanspaces.com/View-river2.jpg'} />
					</div>
					<div>
						<Imgage imageSrc={'https://hausboot.fra1.digitaloceanspaces.com/View-pond.jpg'} />
					</div>
					<div>
						<Imgage imageSrc={'https://hausboot.fra1.digitaloceanspaces.com/View-sluice.jpg'} />
					</div>
				</Slider>
			</SliderWrapper>
			<Angle />
			<YoutubeWrapper>
				<div className="youtube">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.youtube.com/watch?v=6FvqJDBY08g"
					>
						<Button primary={true}>Youtube</Button>
					</a>
				</div>
			</YoutubeWrapper>
			<ReviewContainer>
				<LayoutCards />
			</ReviewContainer>
		</div>
	);
};

export default HomePage;
