import styled from 'styled-components';
import { H3, SubtitleFaded } from '../../shared/text-style';
import { Link } from 'react-router-dom';
export const SidebarContainer = styled.div`
	align-self: flex-start;
	& > h3 {
		${H3}
	}
`;

export const SidebarRecipe = styled.div`
	display: flex;
	gap: 24px;
	margin-top: 32px;
	& > img {
		width: 180px;
		height: 120px;
		object-fit: cover;
		border-radius: 20px;
	}

	& > div {
		align-self: center;
	}

	//Recipe title
	& > div > h6 {
		font-size: 20px;
		font-weight: 600;
		line-height: 28px;
		letter-spacing: -0.04em;
		text-align: left;
	}
	& > div > p {
		margin-top: 16px;
		${SubtitleFaded}
		text-overflow: ellipsis;
	}
`;

export const RecipeLink = styled(Link)`
	all: unset;
	cursor: pointer;
	width: 100%;
`;

export const SidebarAd = styled.img`
	margin-top: 80px;
	object-fit: cover;
`;
