import React from 'react';
import { BadgeContainer } from './styled';
import { ReactComponent as ForkIcon } from './assets/fork-knife.svg';
import { ReactComponent as TimerIcon } from './assets/timer.svg';

const Badge = ({ title, type, text, className }) => {
	const icon = type === 'time' ? <TimerIcon /> : <ForkIcon />;
	return (
		<BadgeContainer hasTitle={title} className={className}>
			{icon}
			<div>
				{title && <span>{title}</span>}
				<span>{text}</span>
			</div>
		</BadgeContainer>
	);
};

export default Badge;
