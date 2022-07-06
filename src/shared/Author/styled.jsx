import styled from 'styled-components';
import { AuthorText, SubtitleFaded } from '../text-style';

export const RecipeAuthor = styled.div`
	display: flex;
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
