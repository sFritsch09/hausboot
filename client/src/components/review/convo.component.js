import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';

import { ConvoContainer } from './card.styles';

const GIRL =
	'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const imgVariant = {
	fadeOut: { opacity: 0, scale: 0 },
	fadeIn: { opacity: 1, scale: 1 },
};

const typingVariant = {
	station: {
		opacity: 0,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.15,
			staggerDirection: -1,
		},
	},
	bounce: {
		opacity: 1,
		transition: { delayChildren: 0.5, staggerChildren: 0.15 },
	},
};

const dotVariant = {
	station: { y: 0, opacity: 0.4 },
	bounce: (i) => ({
		y: -3,
		opacity: 1,
		transition: { ease: 'easeOut', duration: 0.35, yoyo: i },
	}),
};

const computerVariant = {
	hidden: { scale: 0.3, opacity: 0 },
	reveal: { scale: 1, opacity: 1 },
};

const userVariant = {
	hidden: { opacity: 0, scale: 0 },
	reveal: { opacity: 1, scale: 1 },
};

const goodVariant = {
	notClicked: { backgroundColor: 'rgb(17, 17, 17)' },
	clicked: { backgroundColor: '#FF008C' },
};

const Convo = ({ question, answer }) => {
	const [userVisible, setUserVisible] = useState(false);
	const [responseVisible, setResponseVisible] = useState(false);

	// question
	const imgAnim = useAnimation();
	const typingAnim = useAnimation();
	const questionAnim = useAnimation();
	// response
	const resImgAnim = useAnimation();
	const resTypingAnim = useAnimation();
	const resAnswerAnim = useAnimation();

	// play question animation on mount
	useEffect(() => {
		const playAnim = async () => {
			await imgAnim.start('fadeIn');
			await typingAnim.start('bounce');
			await typingAnim.start('station');
			await questionAnim.start('reveal');
			setUserVisible(true);
		};

		playAnim();
	}, [imgAnim, typingAnim, questionAnim]);

	// play response animation when active
	useEffect(() => {
		const playResAnim = async () => {
			await resImgAnim.start('fadeIn');
			await resTypingAnim.start('bounce');
			await resTypingAnim.start('station');
			await resAnswerAnim.start('reveal');
		};

		responseVisible && playResAnim();
	}, [responseVisible, resImgAnim, resTypingAnim, resAnswerAnim]);

	return (
		<ConvoContainer>
			<motion.section
				initial={{ scale: 0.7, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				className="convo"
			>
				<div className="question-container">
					<motion.img
						variants={imgVariant}
						initial="fadeOut"
						animate={imgAnim}
						src={GIRL}
						alt="Girl"
					/>
					<div className="content">
						<motion.ul
							variants={typingVariant}
							initial="station"
							animate={typingAnim}
							className="typing"
						>
							<motion.li variants={dotVariant} custom={3} className="dot" />
							<motion.li variants={dotVariant} custom={3} className="dot" />
							<motion.li variants={dotVariant} custom={3} className="dot" />
						</motion.ul>
						<motion.h3
							variants={computerVariant}
							initial="hidden"
							animate={questionAnim}
							className="question"
						>
							{question}
						</motion.h3>
					</div>
				</div>

				<motion.div
					variants={userVariant}
					initial="hidden"
					animate={userVisible ? 'reveal' : 'hidden'}
					transition={{ delay: 0.5 }}
					className="user"
				>
					<motion.button
						variants={goodVariant}
						initial="notClicked"
						animate={responseVisible ? 'clicked' : 'notClicked'}
						onClick={() => setResponseVisible(true)}
					>
						{answer}
					</motion.button>
				</motion.div>
			</motion.section>
		</ConvoContainer>
	);
};

export default Convo;
