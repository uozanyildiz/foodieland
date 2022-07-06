import React from 'react';
import Layout from '../../components/Layout';
import {
	ContentContainer,
	BlogList,
	BlogSidebar,
	Header,
	HeaderDescription,
	HeaderTitle,
} from './styled';
import Input from './Input';
import Card from './Card';
import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';
import Subscribe from '../../components/Subscribe';
import BLOG_DATA from './data';

const BlogPage = () => {
	const articleList = BLOG_DATA.map((article, i) => (
		<Card key={i} {...article} />
	));
	return (
		<Layout>
			<Header>
				<HeaderTitle>Blog & Article</HeaderTitle>
				<HeaderDescription>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore
				</HeaderDescription>
				<Input
					text='Search'
					type='text'
					placeholder='Search article, news or recipe...'
				/>
			</Header>
			<ContentContainer>
				<BlogList>{articleList}</BlogList>
				<BlogSidebar title='Tasty Recipes' adImg='/img/recipes/Ads.png' />
			</ContentContainer>
			<Pagination />
			<Subscribe mt={160} />
		</Layout>
	);
};

export default BlogPage;
