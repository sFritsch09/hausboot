import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { LayoutContainer, DisplayCard } from './card.styles';
import Convo from './convo.component';

const cards = [
	{ id: 0, name: 'Manuel' },
	{ id: 1, name: 'Christian' },
	{ id: 2, name: 'Thomas' },
	{ id: 3, name: 'Stefan' },
];

const LayoutCards = () => {
	const [selectedId, setSelectedId] = useState(null);

	const [hide, setHide] = useState(false);
	const containerRefs = useRef([]);
	const handlePanEnd = (e, info, card) => {
		if (selectedId) {
			setSelectedId(null);
			setTimeout(() => {
				setHide(false);
			}, 500);
		} else {
			setSelectedId(card);
			setHide(true);
		}
	};
	return (
		<div style={{ height: '200px' }}>
			<LayoutContainer>
				{cards.map((card) => (
					<motion.div
						className={selectedId === card ? 'opened-card' : 'card'}
						key={card.id}
						layout
						dragElastic={0.2}
						onPanEnd={(e, info) => handlePanEnd(e, info, card)}
						ref={(el) => (containerRefs.current[card] = el)}
					>
						<DisplayCard hide={hide}>Click to see review by {card.name}</DisplayCard>
						{selectedId === card && (
							<React.Fragment>
								<Convo className="convo-div" />
							</React.Fragment>
						)}
					</motion.div>
				))}
				<motion.div className="dim-layer" animate={{ opacity: selectedId ? 0.4 : 0 }} />
			</LayoutContainer>
		</div>
	);
};
export default LayoutCards;
