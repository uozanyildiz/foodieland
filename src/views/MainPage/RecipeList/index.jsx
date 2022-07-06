import React from 'react';
import {
	RecipeGrid,
	RecipeListContainer,
	RecipeListHeader,
	RecipeListTitle,
} from './styled';
import { Description } from '../../../shared/Description';
import Recipe from './Recipe';

const RECIPE_DATA = [
	{
		id: 2,
		img: '/img/recipes/cheeseburger.png',
		title: 'Big and Juicy Wagyu Beef Cheeseburger',
		time: '30 Minutes',
		type: 'Snack',
	},
	{
		id: 3,
		img: '/img/recipes/fish.png',
		title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
		time: '30 Minutes',
		type: 'Fish',
	},
	{
		id: 4,
		img: '/img/recipes/pancake.png',
		title: 'Strawberry Oatmeal Pancake with Honey Syrup',
		time: '30 Minutes',
		type: 'Breakfast',
	},
	{
		id: 5,
		img: '/img/recipes/salad.png',
		title: 'Fresh and Healthy Mixed Mayonnaise Salad',
		time: '30 Minutes',
		type: 'Healthy',
	},
	{
		id: 6,
		img: '/img/recipes/meatball.png',
		title: 'Chicken Meatballs with Cream Cheese',
		time: '30 Minutes',
		type: 'Meat',
	},
	//Special ad
	{
		id: 7,
		img: '/img/recipes/ads.png',
		href: 'https://foodieland.uozanyildiz.dev',
		type: 'ad',
	},
	{
		id: 8,
		img: '/img/recipes/fruity-pancake.png',
		title: 'Fruity Pancake with Orange & Blueberry',
		time: '30 Minutes',
		type: 'Sweet',
	},
	{
		id: 9,
		img: '/img/recipes/one-pot-chicken.png',
		title: 'The Best Easy One Pot Chicken and Rice',
		time: '30 Minutes',
		type: 'Snack',
	},
	{
		id: 10,
		img: '/img/recipes/creamy-chicken-bacon-pasta.png',
		title: 'The Creamiest Creamy Chicken and Bacon Pasta',
		time: '30 Minutes',
		type: 'Noodles',
	},
];

const RecipeList = () => {
	const Recipes = RECIPE_DATA.map((recipe, i) => {
		return <Recipe key={i} {...recipe} />;
	});

	return (
		<RecipeListContainer>
			<RecipeListHeader>
				<RecipeListTitle>Simple and tasty recipes</RecipeListTitle>
				<Description mt='24'>
					Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
				</Description>
			</RecipeListHeader>
			<RecipeGrid>{Recipes}</RecipeGrid>
		</RecipeListContainer>
	);
};

export default RecipeList;
