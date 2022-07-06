import React from 'react';
import Break from '../../../shared/Break';
import {
	NutritionLayout,
	NutritionContainer,
	NutritionList,
	NutritionText,
	NutritionTitle,
	RecipeImg,
	NutritionCardContainer,
} from './styled';

const NutritionCard = ({ title, value }) => {
	return (
		<>
			<NutritionCardContainer>
				<span>{title}</span>
				<span>{value}</span>
			</NutritionCardContainer>
			<Break $width='100%' />
		</>
	);
};

const Nutrition = ({
	calories,
	carbohydrate,
	protein,
	fat,
	cholesterol,
	img,
}) => {
	return (
		<NutritionLayout>
			<RecipeImg src={img} />
			<NutritionContainer>
				<div>
					<NutritionTitle>Nutrition Information</NutritionTitle>
					<NutritionList>
						<NutritionCard title='Calories' value={calories} />
						<NutritionCard title='Total Fat' value={carbohydrate} />
						<NutritionCard title='Protein' value={protein} />
						<NutritionCard title='Carbohydrate' value={fat} />
						<NutritionCard title='Cholesterol' value={cholesterol} />
					</NutritionList>
				</div>
				<NutritionText>
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua.
				</NutritionText>
			</NutritionContainer>
		</NutritionLayout>
	);
};

export default Nutrition;
