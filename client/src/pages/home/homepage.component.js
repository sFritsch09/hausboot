import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper, Imgage, Angle, ReviewContainer, YoutubeWrapper } from './homepage.styles';
import LayoutCards from '../../components/review/card.component';
import useWindowSize from '../../components/hooks/useMobile';
import YouTube from 'react-youtube';

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
									? 'https://pb.techchase.de/api/files/cqrcvtuakl65aun/hswidntcx0etl03/home_mobile_tlqvYEoksj.jpg'
									: 'https://pb.techchase.de/api/files/cqrcvtuakl65aun/hswidntcx0etl03/hompage_blau_GnobqWxZTc.jpg'
							}
						/>
					</div>
					<div>
						<Imgage
							imageSrc={
								'https://pb.techchase.de/api/files/cqrcvtuakl65aun/hswidntcx0etl03/view_river2_QFN3eMlPqh.jpg'
							}
						/>
					</div>
					<div>
						<Imgage
							imageSrc={
								'https://pb.techchase.de/api/files/cqrcvtuakl65aun/hswidntcx0etl03/view_pond_AXgIVYoFyD.jpg'
							}
						/>
					</div>
					<div>
						<Imgage
							imageSrc={
								'https://pb.techchase.de/api/files/cqrcvtuakl65aun/hswidntcx0etl03/view_sluice_cN9gxBy1Js.jpg'
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
