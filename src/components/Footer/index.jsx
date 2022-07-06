import React from 'react';
import {
	ExternalLink,
	FooterBr,
	FooterContainer,
	FooterCopyright,
	FooterInfo,
	FooterLink,
	FooterLogo,
	FooterUpper,
	Highlight,
} from './styled';
import { Description } from '../../shared/Description';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterUpper>
				<FooterInfo>
					<FooterLogo src='/img/logo.png' />
					<Description mt={16}>
						Lorem ipsum dolor sit amet, consectetuipisicing elit
					</Description>
				</FooterInfo>
				<FooterLink>
					<ul>
						<li>
							<Link to='/recipes'>Recipes</Link>
						</li>
						<li>
							<Link to='/blog'>Blog</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
						</li>
						<li>
							<Link to='/about-us'>About us</Link>
						</li>
					</ul>
				</FooterLink>
			</FooterUpper>
			<FooterBr />
			<FooterCopyright>
				<ExternalLink
					href='https://github.com/uozanyildiz/foodieland'
					target='_blank'
					rel='noreferrer'
				>
					Created with React ❤️
				</ExternalLink>
			</FooterCopyright>
		</FooterContainer>
	);
};

export default Footer;
