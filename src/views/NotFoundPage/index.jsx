import React from 'react';
import Layout from '../../components/Layout';
import Button from '../../shared/Button';
import { Container, PageText, PageTitle } from './styled';

const NotFoundPage = () => {
	return (
		<Layout>
			<Container>
				<PageTitle>Oooops! Something's missing.</PageTitle>
				<PageText>
					This page doesn't exist or it is removed. Would you like to go to our
					homepage?
				</PageText>
				<Button to='/' text='Back to Home' />
			</Container>
		</Layout>
	);
};

export default NotFoundPage;
