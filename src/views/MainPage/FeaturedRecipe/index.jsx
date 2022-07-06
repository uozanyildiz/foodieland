import React from 'react';
import {
	RecipeAuthor,
	RecipeBadge,
	RecipeBadges,
	RecipeContainer,
	RecipeDescription,
	RecipeFooter,
	RecipeImg,
	RecipeInfo,
	RecipeTitle,
	RecipeTitleBadge,
} from './styled';
import featuredImg from './assets/featured.jpg';
import hotRecipeImg from './assets/hot-recipe.png';
import { ReactComponent as PlayIcon } from './assets/play.svg';
import Button from '../../../shared/Button';
import data from '../data';

const FeaturedRecipe = () => {
	const recipeURL = `recipes/${data.featuredRecipe.recipeId}`;
	return (
		<RecipeContainer>
			<RecipeInfo>
				<RecipeTitleBadge>
					<img src={hotRecipeImg} alt='Featured recipe' />
					<span>Hot Recipes</span>
				</RecipeTitleBadge>
				<RecipeTitle>{data.featuredRecipe.title}</RecipeTitle>
				<RecipeDescription>{data.featuredRecipe.desc}</RecipeDescription>
				<RecipeBadges>
					<RecipeBadge type='time' text={data.featuredRecipe.time} />
					<RecipeBadge type='type' text={data.featuredRecipe.type} />
				</RecipeBadges>
				<RecipeFooter>
					<RecipeAuthor>
						<img
							src={data.featuredRecipe.author.img}
							alt={data.featuredRecipe.author.name}
						/>
						<div>
							<h4>{data.featuredRecipe.author.name}</h4>
							<p>{data.featuredRecipe.author.date}</p>
						</div>
					</RecipeAuthor>
					<Button text='View Recipe' icon={<PlayIcon />} to={recipeURL} />
				</RecipeFooter>
			</RecipeInfo>
			<RecipeImg src={featuredImg} />
		</RecipeContainer>
	);
};

export default FeaturedRecipe;
