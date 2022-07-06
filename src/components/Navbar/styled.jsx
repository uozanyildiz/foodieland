import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';
import { device } from '../../shared/device';
import { NavText } from '../../shared/text-style';

export const NavWrapper = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const NavbarMainContainer = styled.nav`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 40px;

	@media ${device.laptop} {
		gap: 32px;
		justify-content: space-between;
	}
`;

export const NavbarLogo = styled.img`
	width: 110px;
`;

export const NavbarLinks = styled.ul`
	list-style-type: none;
	display: none;
	flex-shrink: 0;
	gap: clamp(1rem, 3.75vw, 3.75rem);

	@media ${device.laptop} {
		display: flex;
	}
`;

export const NavLinkStyled = styled(NavLink)`
	all: unset;
	cursor: pointer;
	${NavText}
	color: rgba(0, 0, 0, 0.60);
	transition: color 0.2s ease-in-out;

	&.active {
		color: rgba(0, 0, 0, 1);
	}

	&:hover {
		color: rgba(0, 0, 0, 1);
	}
`;

export const NavbarIcons = styled.ul`
	list-style-type: none;
	display: none;
	align-items: center;
	justify-content: center;
	gap: clamp(0.75rem, 2.5vw, 2.5rem);

	& > li > a {
		all: unset;
		cursor: pointer;
	}

	& > li > a > svg {
		max-width: 24px;
		max-height: 24px;
		min-width: 12px;
		min-height: 12px;
	}

	@media ${device.laptop} {
		display: flex;
	}
`;

export const NavbarBr = styled.div`
	margin: 0 -45px;

	@media ${device.laptop} {
		margin: 0 -75px;
	}

	@media ${device.desktop} {
		margin: 0 -125px;
	}
	content: '.';
	height: 1px;
	width: 115%;
	background-color: rgba(0, 0, 0, 0.1);
`;

export const NavbarMenu = styled.div`
	position: fixed;
	z-index: 2;
	top: 0;
	right: 0;
	background-color: rgba(255, 255, 255, 0.5);
	width: 25vw;
	height: 100vh;
	visibility: visible;
	opacity: 1;
	backdrop-filter: blur(16px);
	transition: all 0.3s ease-in-out;

	${(props) =>
		!props.$open &&
		css`
			visibility: hidden;
			opacity: 0;
		`}
	@media ${device.mobile} {
		width: 25vw;
	}

	@media ${device.tablet} {
		width: 25vw;
	}

	@media ${device.laptop} {
		display: none;
	}
`;

export const NavbarMenuContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: 50px;
	height: 50px;
	transition: all 0.5s ease-in-out;

	${(props) =>
		props.$open &&
		css`
			margin-right: 32px;
		`}

	@media ${device.mobile} {
		margin-right: 0px;
	}

	@media ${device.laptop} {
		display: none;
	}
`;

export const NavbarHamburgerButton = styled.a`
	position: relative;
	all: unset;
	width: 25px;
	height: 2px;
	background-color: black;
	transition: all 0.5s ease-in-out;

	${(props) =>
		props.$open &&
		css`
			background: transparent;
			transform: translateX(-32px);
		`}

	&::before {
		position: absolute;
		content: '';
		width: 25px;
		height: 2px;
		background-color: black;
		transition: all 0.5s ease-in-out;
		transform: translateY(-8px);
		${(props) =>
			props.$open &&
			css`
				transform: rotate(45deg) translate(16px, -16px);
			`}
	}

	&::after {
		position: absolute;
		content: '';
		width: 25px;
		height: 2px;
		background-color: black;
		transition: all 0.5s ease-in-out;
		transform: translateY(8px);
		${(props) =>
			props.$open &&
			css`
				transform: rotate(-45deg) translate(16px, 16px);
			`}
	}
`;

export const NavbarIconsExtended = styled(NavbarIcons)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 32px;

	@media ${device.laptop} {
		display: none;
	}
`;

export const NavbarLinksExtended = styled(NavbarLinks)`
	display: flex;
	flex-direction: column;
	margin-top: 24px;
	align-items: center;

	@media ${device.laptop} {
		display: none;
	}
`;
