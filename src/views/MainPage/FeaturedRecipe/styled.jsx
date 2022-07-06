import styled from 'styled-components';
import Badge from '../../../shared/Badge';
import { Description } from '../../../shared/Description';
import { device } from '../../../shared/device';
import { Link } from 'react-router-dom';

import {
	AuthorText,
	BadgeText,
	H1,
	SubtitleFaded,
} from '../../../shared/text-style';

export const RecipeContainer = styled.div`
	margin-top: 40px;
	display: flex;
	overflow: hidden;
	border-radius: 62px;
	position: relative;

	/* background: url(${(props) => props.bg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center; */

	@media ${device.laptop} {
		background: ${(props) => props.theme.colors.cardBg};
	}
`;

export const RecipeInfo = styled.div`
	padding: 25px;
	padding-bottom: 0;
	width: 100%;

	@media ${device.mobile} {
		padding: 50px;
	}
`;

export const RecipeTitleBadge = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	padding: 16px 16px;
	text-align: center;
	border-radius: 40px;
	width: 156px;
	height: 45px;
	filter: drop-shadow(13px 26px 40px rgba(41, 64, 70, 0.1));

	& > span {
		${BadgeText}
		color:black;
	}

	& > img {
		width: 24px;
		height: 24px;
		margin-right: 13px;
	}
`;

export const RecipeTitle = styled.h1`
	${H1}
	margin-top: 32px;
`;

export const RecipeBadges = styled.div`
	margin-top: 30px;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 16px;

	@media ${device.mobile} {
		flex-direction: row;
	}
`;

export const RecipeBadge = styled(Badge)`
	background-color: ${(props) => props.theme.colors.badgeBg};
	padding: 8px 16px;
	border-radius: 40px;
`;

export const RecipeFooter = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	margin-top: 48px;
	margin-bottom: 48px;

	gap: 40px;

	@media ${device.desktop} {
		margin-top: 100px;
		flex-direction: row;
		justify-content: space-between;
		margin-right: 24px;
	}
`;

export const ButtonLink = styled(Link)`
	all: unset;
`;

export const RecipeAuthor = styled.div`
	display: flex;
	flex-shrink: 0;
	align-items: center;

	//Author image
	& > img {
		border-radius: 50%;
		width: 50px;
		margin-right: 16px;
	}

	//Author name
	& > div > h4 {
		margin-bottom: 8px;
		${AuthorText}
	}

	//Date
	& > div > p {
		${SubtitleFaded}
	}
`;

export const RecipeImg = styled.img`
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	filter: blur(8px) opacity(0.4);
	object-fit: cover;
	border-radius: 62px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;

	@media ${device.laptop} {
		display: block;
		width: 50%;
		height: auto;
		position: static;
		z-index: 0;
		filter: none;
	}
`;

export const RecipeDescription = styled(Description)`
	margin-top: 24px;
	color: black;
`;
