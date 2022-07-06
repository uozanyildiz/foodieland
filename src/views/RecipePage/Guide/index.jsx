import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Checklist from '../../../shared/Checklist';
import Direction from './Direction';
import {
	DirectionsContainer,
	GuideContainer,
	GuideSidebar,
	IngredientsContainer,
} from './styled';

const Guide = ({ ingredients, directions }) => {
	return (
		<GuideContainer>
			<div>
				{/* Ingredients */}
				<IngredientsContainer>
					<h3>Ingredients</h3>
					<h4>For main dish</h4>
					{ingredients.main.map((ingredient, i) => (
						<Checklist key={i}>{ingredient}</Checklist>
					))}
				</IngredientsContainer>
				{ingredients.others.map((ingredientList, i) => (
					<IngredientsContainer key={i}>
						<h4>{ingredientList.title}</h4>
						{ingredientList.ingredients.map((ingredient, i) => (
							<Checklist key={i}>{ingredient}</Checklist>
						))}
					</IngredientsContainer>
				))}

				{/* Directions */}
				<DirectionsContainer>
					{directions.map((direction, i) => (
						<Direction key={i} {...direction} index={i + 1} />
					))}
				</DirectionsContainer>
			</div>
			<GuideSidebar title='Other Recipes' adImg='/img/recipes/Ads.png' />
		</GuideContainer>
	);
};

export default Guide;
