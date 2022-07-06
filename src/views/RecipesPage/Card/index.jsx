import React from 'react';
import {
	BadgeContainer,
	CardBadge,
	CardContainer,
	CardImg,
	RecipeLink,
} from './styled';

const Card = ({ id, img, title, desc, time, type }) => {
	const recipeURL = `/recipes/${id}`;
	return (
		<CardContainer>
			<div>
				<CardImg src={img} alt={title} />
			</div>
			<div>
				<h3>
					<RecipeLink to={recipeURL}>{title}</RecipeLink>
				</h3>
				<p>{desc}</p>
				<BadgeContainer>
					<CardBadge type='food' text={type} />
					<CardBadge type='time' text={time} />
				</BadgeContainer>
			</div>
		</CardContainer>
	);
};

export default Card;
