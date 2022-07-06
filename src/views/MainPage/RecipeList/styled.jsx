import styled from 'styled-components';
import { device } from '../../../shared/device';
import { H2 } from '../../../shared/text-style';

export const RecipeListContainer = styled.div`
	margin-top: clamp(3rem, 11vw, 11rem);
`;

export const RecipeListTitle = styled.h2`
	${H2}
`;

export const RecipeListHeader = styled.div`
	text-align: center;

	& > p {
		display: inline-block;
		margin-top: 24px;
	}
`;

export const RecipeGrid = styled.div`
	margin-top: clamp(1.5rem, 6vw, 6rem);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	column-gap: 32px;
	row-gap: 32px;

	@media ${device.laptop} {
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
	}

	@media ${device.desktop} {
		grid-template-columns: auto auto auto;
		grid-template-rows: auto auto auto;
	}
`;
