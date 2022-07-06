import React from 'react';
import {
	CategoryButton,
	CategoryContainer,
	CategoryHeader,
	CategoryItem,
	CategoryList,
	CategoryTitle,
	ItemImg,
	ItemName,
} from './styled';

const Categories = () => {
	const categoryData = [
		{ name: 'Breakfast', img: 'img/categories/breakfast.png' },
		{ name: 'Vegan', img: 'img/categories/vegan.png' },
		{ name: 'Meat', img: 'img/categories/meat.png' },
		{ name: 'Dessert', img: 'img/categories/dessert.png' },
		{ name: 'Lunch', img: 'img/categories/lunch.png' },
		{ name: 'Chocolate', img: 'img/categories/chocolate.png' },
	];

	return (
		<CategoryContainer>
			<CategoryHeader>
				<CategoryTitle>Categories</CategoryTitle>
				<CategoryButton text='View All Categories' />
			</CategoryHeader>
			<CategoryList>
				{categoryData.map(({ name, img }, i) => (
					<CategoryItem key={i}>
						<ItemImg src={img} alt={name} />
						<ItemName>{name}</ItemName>
					</CategoryItem>
				))}
			</CategoryList>
		</CategoryContainer>
	);
};

export default Categories;
