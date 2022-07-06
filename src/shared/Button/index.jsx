import React from 'react';
import { ButtonLink, ButtonStyle } from './styled';

const Button = ({ text, icon = null, className, onClick, to }) => {
	return (
		<>
			{/* If there's link, no need to wrap up with Link component  */}
			{to && (
				<ButtonLink to={to}>
					<ButtonStyle
						onClick={onClick}
						className={className}
						hasIcon={icon && true}
					>
						<span>{text}</span>
						{icon}
					</ButtonStyle>
				</ButtonLink>
			)}
			{!to && (
				<ButtonStyle
					onClick={onClick}
					className={className}
					hasIcon={icon && true}
				>
					<span>{text}</span>
					{icon}
				</ButtonStyle>
			)}
		</>
	);
};

export default Button;
