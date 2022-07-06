import React from 'react';
import Layout from '../../components/Layout';
import Guide from './Guide';
import Header from './Header';
import Nutrition from './Nutrition';
import { RecipeDesc } from './styled';
import RECIPE_DATA from './recipe';
import Subscribe from '../../components/Subscribe';
const RecipePage = () => {
	return (
		<Layout>
			<Header {...RECIPE_DATA.header} />
			<Nutrition {...RECIPE_DATA.nutrition} />
			<RecipeDesc>{RECIPE_DATA.description}</RecipeDesc>
			<Guide
				ingredients={RECIPE_DATA.ingredients}
				directions={RECIPE_DATA.directions}
			/>
			<Subscribe mt='112' />
		</Layout>
	);
};

export default RecipePage;
