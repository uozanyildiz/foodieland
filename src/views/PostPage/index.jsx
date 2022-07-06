import React from 'react';
import Layout from '../../components/Layout';
import Subscribe from '../../components/Subscribe';
import {
	AuthorBr,
	AuthorDate,
	AuthorImg,
	AuthorName,
	MarkdownContainer,
	PostAuthor,
	PostContent,
	PostDesc,
	PostHeader,
	PostImg,
	PostPageContainer,
	PostShareContainer,
	PostTitle,
} from './styled';
import ReactMarkdown from 'react-markdown';
import { ReactComponent as FacebookIcon } from './assets/facebook.svg';
import { ReactComponent as InstagramIcon } from './assets/instagram.svg';
import { ReactComponent as TwitterIcon } from './assets/twitter.svg';

import DATA from './data';

const PostPage = () => {
	return (
		<Layout>
			<PostPageContainer>
				<PostHeader>
					<PostTitle>{DATA.title}</PostTitle>
					<PostAuthor>
						<AuthorImg src={DATA.author.img} alt={DATA.author.name} />
						<AuthorName>{DATA.author.name}</AuthorName>
						<AuthorBr />
						<AuthorDate>{DATA.author.date}</AuthorDate>
					</PostAuthor>
					<PostDesc>{DATA.desc}</PostDesc>
					<PostImg src={DATA.img} />
				</PostHeader>
				<PostContent>
					<MarkdownContainer>
						<ReactMarkdown children={DATA.content} />
					</MarkdownContainer>
					<PostShareContainer>
						<span>Share this on:</span>
						<a href='/'>
							<FacebookIcon />
						</a>
						<a href='/'>
							<TwitterIcon />
						</a>
						<a href='/'>
							<InstagramIcon />
						</a>
					</PostShareContainer>
				</PostContent>
			</PostPageContainer>
			<Subscribe />
		</Layout>
	);
};

export default PostPage;
