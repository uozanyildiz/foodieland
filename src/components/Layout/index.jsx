import React from 'react';
import Navbar from '../Navbar';
import { LayoutContainer } from './styled';
import Footer from '../Footer';

const Layout = (props) => {
	return (
		<LayoutContainer>
			<Navbar />
			{props.children}
			<Footer />
		</LayoutContainer>
	);
};

export default Layout;
