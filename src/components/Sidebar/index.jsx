import React from 'react';
import {
	RecipeLink,
	SidebarAd,
	SidebarContainer,
	SidebarRecipe,
} from './styled';

const RecommendedRecipe = () => {
	return (
		<SidebarRecipe>
			<img src='/img/recipes/meatball.png' alt='Meatball' />
			<div>
				<h6>
					<RecipeLink to='/recipes/6'>
						Chicken Meatball with Creamy Cheese
					</RecipeLink>
				</h6>
				<p>By Andreas Paula</p>
			</div>
		</SidebarRecipe>
	);
};

const Sidebar = ({ title, adImg, className }) => {
	return (
		<SidebarContainer className={className}>
			<h3>{title}</h3>
			<RecommendedRecipe />
			<RecommendedRecipe />
			<RecommendedRecipe />
			<SidebarAd src={adImg} />
		</SidebarContainer>
	);
};

export default Sidebar;
