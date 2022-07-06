import React from 'react';
import {
	AuthorContainer,
	AuthorDate,
	AuthorName,
	BlogLink,
	CardBr,
	CardContainer,
	CardImg,
} from './styled';

const Card = ({ id, img, title, desc, author }) => {
	const blogURL = `/blog/${id}`;
	return (
		<CardContainer>
			<div>
				<CardImg src={img} alt={title} />
			</div>
			<div>
				<h3>
					<BlogLink to={blogURL}>{title}</BlogLink>
				</h3>
				<p>{desc}</p>
				<AuthorContainer>
					<img src={author.img} alt={author} />
					<AuthorName>{author.name}</AuthorName>
					<CardBr />
					<AuthorDate>{author.date}</AuthorDate>
				</AuthorContainer>
			</div>
		</CardContainer>
	);
};

export default Card;
