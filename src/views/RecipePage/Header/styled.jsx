import styled from 'styled-components';
import { device } from '../../../shared/device';
import { H1, SubtitleSpaced } from '../../../shared/text-style';
import { RecipeAuthor } from '../../MainPage/FeaturedRecipe/styled';

export const HeaderContainer = styled.div`
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media ${device.desktop} {
		flex-direction: row;
		margin-top: 80px;
	}
`;

export const HeaderAuthor = styled(RecipeAuthor)`
	margin-right: 18px;
	@media ${device.desktop} {
		margin-right: 26px;
	}
`;
export const HeaderInfo = styled.div`
	flex-shrink: 0;
`;

export const HeaderBadgeStyle = styled.div`
	display: flex;
	gap: clamp(1rem, 2vw, 2rem);

	//Break
	& > div:first-child {
		height: 0px;
	}

	@media ${device.laptop} {
		flex-direction: row;

		//Break
		& > div:first-child {
			height: 50px;
		}
	}
`;

export const RecipeTitle = styled.h1`
	${H1}
`;
export const RecipeInfo = styled.div`
	margin-top: 48px;
	display: flex;
	flex-direction: column;
	gap: clamp(1rem, 2vw, 2rem);

	@media ${device.laptop} {
		display: flex;
		flex-direction: row;
	}
`;

export const HeaderAction = styled.div`
	align-self: center;
	margin-top: 40px;

	@media ${device.desktop} {
		margin-top: 0;
	}
`;
export const HeaderButton = styled.div`
	all: unset;
	display: inline-block;
	padding: 16px;

	& > span {
		${SubtitleSpaced}
		display: block;
		margin-top: 16px;
		text-align: center;
	}

	& > div {
		background-color: ${(props) => props.theme.colors.blue};
		border-radius: 50%;
		padding: 28px;
		width: 80px;
		height: 80px;
		cursor: pointer;
	}

	& > div > svg {
		width: 24px;
		height: 24px;
	}
`;
