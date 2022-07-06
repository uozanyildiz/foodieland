import React, { useState } from 'react';
import {
	NavbarBr,
	NavbarHamburgerButton,
	NavbarIcons,
	NavbarIconsExtended,
	NavbarLinks,
	NavbarLinksExtended,
	NavbarLogo,
	NavbarMainContainer,
	NavbarMenu,
	NavbarMenuContainer,
	NavLinkStyled,
	NavWrapper,
} from './styled';

import { ReactComponent as TwitterIcon } from './assets/twitterIcon.svg';
import { ReactComponent as FbIcon } from './assets/fbIcon.svg';
import { ReactComponent as InstagramIcon } from './assets/instagramIcon.svg';
const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<NavWrapper>
			<NavbarMainContainer>
				<NavbarLogo src='/img/logo.png' alt='Foodieland.' />
				<NavbarLinks>
					<li>
						<NavLinkStyled to='/'>Home</NavLinkStyled>
					</li>
					<li>
						<NavLinkStyled to='/recipes'>Recipes</NavLinkStyled>
					</li>
					<li>
						<NavLinkStyled to='/blog'>Blog</NavLinkStyled>
					</li>
					<li>
						<NavLinkStyled to='/contact'>Contact</NavLinkStyled>
					</li>
					<li>
						<NavLinkStyled to='/about-us'>About us</NavLinkStyled>
					</li>
				</NavbarLinks>
				<NavbarIcons>
					<li>
						<a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
							<FbIcon />
						</a>
					</li>
					<li>
						<a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
							<TwitterIcon />
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com'
							target='_blank'
							rel='noreferrer'
						>
							<InstagramIcon />
						</a>
					</li>
				</NavbarIcons>

				{/* Mobile menu */}
				<NavbarMenuContainer
					$open={isMenuOpen}
					onClick={() => {
						setIsMenuOpen((prev) => !prev);
					}}
				>
					<NavbarHamburgerButton $open={isMenuOpen} />
				</NavbarMenuContainer>
				<NavbarMenu $open={isMenuOpen}>
					<NavbarLinksExtended>
						<li>
							<NavLinkStyled to='/'>Home</NavLinkStyled>
						</li>
						<li>
							<NavLinkStyled to='/recipes'>Recipes</NavLinkStyled>
						</li>
						<li>
							<NavLinkStyled to='/blog'>Blog</NavLinkStyled>
						</li>
						<li>
							<NavLinkStyled to='/contact'>Contact</NavLinkStyled>
						</li>
						<li>
							<NavLinkStyled to='/about-us'>About us</NavLinkStyled>
						</li>
					</NavbarLinksExtended>
					<NavbarIconsExtended>
						<li>
							<a href='/'>
								<FbIcon />
							</a>
						</li>
						<li>
							<a href='/'>
								<TwitterIcon />
							</a>
						</li>
						<li>
							<a href='/'>
								<InstagramIcon />
							</a>
						</li>
					</NavbarIconsExtended>
				</NavbarMenu>
			</NavbarMainContainer>
			<NavbarBr />
		</NavWrapper>
	);
};

export default Navbar;
