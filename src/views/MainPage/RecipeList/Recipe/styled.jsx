import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';
import { BadgeText, H4 } from '../../../../shared/text-style';
import { ReactComponent as HeartIcon } from './assets/heart.svg';

export const AdContainer = styled.a`
	margin: 0 auto;
	padding: 16px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const RecipeContainer = styled.div`
	background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
	border-radius: 40px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	padding: 16px;

	& img {
		align-self: center;
		width: 100%;
		height: 25vh;
		border-radius: 18px;
		object-fit: cover;
		user-select: none;
	}

	& h4 {
		${H4}
		line-height: 32px;
		margin: 24px;
	}
`;

export const RecipeLink = styled(Link)`
	all: unset;
	cursor: pointer;
`;

export const HeartWrapper = styled.div`
	width: 48px;
	height: 48px;
	position: absolute;
	top: 36px;
	right: 36px;
	border-radius: 50%;
	background-color: #fff;
`;

export const Heart = styled(HeartIcon)`
	width: 48px;
	height: 48px;
	color: ${(props) => (props.$fav ? '#FF6363' : '#DBE2E5')};
	transition: all 0.5s ease-in-out;
	${(props) =>
		props.fav &&
		css`
			transform: scale(1.1);
		`}
`;

export const RecipeBadgeContainer = styled.div`
	color: rgba(0, 0, 0, 0.6);
	${BadgeText}
	margin-bottom: 32px;
	margin-left: 24px;
	display: flex;
	gap: 16px;
	justify-content: flex-start;
	align-items: flex-start;

	//Badge
	& > div {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-shrink: 0;
	}

	& > div > svg {
		width: 24px;
		height: 24px;
	}
`;
