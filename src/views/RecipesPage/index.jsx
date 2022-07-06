import React from 'react';
import Layout from '../../components/Layout';
import {
	ContentContainer,
	Header,
	HeaderDescription,
	HeaderTitle,
	RecipeContainer,
	RecipeSidebar,
} from './styled';
import Input from './Input';
import Card from './Card';
import Pagination from '../../components/Pagination';
import Subscribe from '../../components/Subscribe';
import BLOG_DATA from './data';

const RecipesPage = () => {
	const recipeList = BLOG_DATA.map((recipe, i) => <Card key={i} {...recipe} />);
	return (
		<Layout>
			<Header>
				<HeaderTitle>Latest Recipes</HeaderTitle>
				<HeaderDescription>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore
				</HeaderDescription>
				<Input
					text='Search'
					type='text'
					placeholder='Search delicious recipes..'
				/>
			</Header>
			<ContentContainer>
				<RecipeContainer>{recipeList}</RecipeContainer>
				<RecipeSidebar title='Tasty Recipes' adImg='/img/recipes/Ads.png' />
			</ContentContainer>
			<Pagination />
			<Subscribe mt={160} />
		</Layout>
	);
};

export default RecipesPage;
