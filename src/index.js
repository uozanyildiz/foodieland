/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './shared/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './views/MainPage';
import BlogPage from './views/BlogPage';
import PostPage from './views/PostPage';
import ContactPage from './views/ContactPage';
import AboutUsPage from './views/AboutUsPage';
import RecipesPage from './views/RecipesPage';
import RecipePage from './views/RecipePage';
import routes from './shared/routes';
import NotFoundPage from './views/NotFoundPage';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Routes>
					<Route path={routes.mainRoute} element={<MainPage />} exact />
					<Route path={routes.recipesRoute} element={<RecipesPage />} />
					<Route path={`${routes.recipesRoute}/:id`} element={<RecipePage />} />
					<Route path={routes.blogRoute} element={<BlogPage />} />
					<Route path={`${routes.blogRoute}/:id`} element={<PostPage />} />
					<Route path={routes.contactRoute} element={<ContactPage />} />
					<Route path={routes.aboutRoute} element={<AboutUsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Router>
		</ThemeProvider>
	</StrictMode>
);
