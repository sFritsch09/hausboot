import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from './photos';
import { GalleryContainer } from './photoGallery.styles';
import UnderlinedMenu from 'components/underlinedMenu/underlinedMenu.component';

const PhotoGallery = () => {
	const [selected, setSelected] = useState('Tour');
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	const photoSwitch = (photo) =>
		({
			Tour: photos.general,
			Rot: photos.rot,
			Blau: photos.blau,
			'Floß S': photos.floßS,
			'Floß L': photos.floßL,
		}[photo]);

	return (
		<div>
			<UnderlinedMenu selected={selected} setSelected={setSelected} />
			<GalleryContainer>
				<Gallery photos={photoSwitch(selected)} direction="row" onClick={openLightbox} />
				<ModalGateway>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox}>
							<Carousel
								currentIndex={currentImage}
								views={photoSwitch(selected).map((x) => ({
									...x,
									srcset: x.srcSet,
									caption: x.title,
								}))}
							/>
						</Modal>
					) : null}
				</ModalGateway>
			</GalleryContainer>
		</div>
	);
};
export default PhotoGallery;
