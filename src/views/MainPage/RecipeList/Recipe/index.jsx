import React, { useState } from 'react';
import {
	AdContainer,
	Heart,
	HeartWrapper,
	RecipeBadgeContainer,
	RecipeContainer,
	RecipeLink,
} from './styled';
import Badge from '../../../../shared/Badge';

const Recipe = ({ id, img, title = '', time = '', type, href = '' }) => {
	const [favClicked, setFavClicked] = useState(false);
	const favClickHandler = () => setFavClicked(!favClicked);
	const recipeURL = `/recipes/${id}`;

	if (type === 'ad')
		return (
			<AdContainer href={href}>
				<img src={img} alt={title} />
			</AdContainer>
		);
	return (
		<RecipeContainer>
			<HeartWrapper fav={favClicked}>
				<Heart onClick={favClickHandler} $fav={favClicked} />
			</HeartWrapper>
			<img src={img} alt={title} />
			<h4>
				<RecipeLink to={recipeURL}>{title}</RecipeLink>
			</h4>
			<RecipeBadgeContainer>
				<Badge type='time' text={time} />
				<Badge type='type' text={type} />
			</RecipeBadgeContainer>
		</RecipeContainer>
	);
};

export default Recipe;
