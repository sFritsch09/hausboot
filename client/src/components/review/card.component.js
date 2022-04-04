import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { LayoutContainer, DisplayCard, Notify } from './card.styles';
import Convo from './convo.component';

const cards = [
	{
		id: 0,
		name: 'Manuel',
		question: 'Wie fandest du die Ausstattung?',
		answer: 'answer1 for testing',
	},
	{ id: 1, name: 'Christian', question: 'Wie hat dir der Ort gefallen?', answer: 'answer2' },
	{ id: 2, name: 'Thomas', question: 'Was fandest du am schönsten?', answer: 'answer3' },
	{
		id: 3,
		name: 'Stefan',
		question: 'Wie hat dir deine Tour gefallen?',
		answer:
			'So nah und so intensiv habe ich noch nie Natur spüren können wie auf diesem Hausboot Trip!',
	},
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
						<DisplayCard hide={hide}>
							<div className="notify">
								<Notify>1</Notify>
							</div>
							<div>Nachricht von {card.name}</div>
						</DisplayCard>
						{selectedId === card && (
							<React.Fragment>
								<Convo className="convo-div" question={card.question} answer={card.answer} />
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
