import React from 'react';
import FeaturedRecipe from './FeaturedRecipe';
import Layout from '../../components/Layout';
import RecipeList from './RecipeList';
import LearnMore from './LearnMore';
import Subscribe from '../../components/Subscribe';

const MainPage = () => {
	return (
		<Layout>
			<FeaturedRecipe />
			<RecipeList />
			<LearnMore />
			<Subscribe mt='160' />
		</Layout>
	);
};

export default MainPage;
