import React from 'react';
import { HeaderAuthor } from '../../views/RecipePage/Header/styled';

const Author = ({ author, isFlat = false }) => {
	return (
		<HeaderAuthor flat={isFlat}>
			<img src={author.img} alt='John Smith' />
			<div>
				<h4>{author.name}</h4>
				<p>{author.date}</p>
			</div>
		</HeaderAuthor>
	);
};

export default Author;
