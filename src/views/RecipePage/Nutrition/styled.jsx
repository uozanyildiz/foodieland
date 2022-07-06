import styled from 'styled-components';
import { device } from '../../../shared/device';
import { CategoryText, H4, P, SubtitleFaded } from '../../../shared/text-style';

export const NutritionLayout = styled.div`
	margin-top: clamp(2rem, 4vw, 4rem); // 64px
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 40px;
	flex-direction: column;

	@media ${device.desktop} {
		flex-direction: row;
	}
`;

export const RecipeImg = styled.img`
	max-height: 100%;
	max-width: 100%;
	object-fit: cover;
	border-radius: 30px;

	@media ${device.laptop} {
		max-height: 65%;
		max-width: 65%;
	}
`;

export const NutritionContainer = styled.div`
	background-color: ${(props) => props.theme.colors.blue};
	border-radius: 30px;
	padding: 32px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const NutritionTitle = styled.h4`
	${H4}
	text-align: center;
`;

export const NutritionList = styled.div`
	& > div:first-child {
		margin-top: 24px;
	}

	& > div:not(:first-child) {
		margin-top: 16px;
	}
`;
export const NutritionCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 8px;

	& > span:first-child {
		${SubtitleFaded}
		font-size: clamp(0.875rem, 1.125vw, 1.125rem); // 18px
		line-height: 22px;
		text-align: left;
	}

	& > span:nth-child(2) {
		${CategoryText}
		font-size: clamp(0.875rem, 1.125vw, 1.125rem); // 18px
		font-weight: 500;
		text-align: right;
		flex-shrink: 0;
	}

	@media ${device.desktop} {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const NutritionText = styled.span`
	margin-top: 16px;
	${P}
	font-size: clamp(0.75rem, 1vw, 1rem); // 18px
	text-align: center;
	color: ${(props) => props.theme.colors.subtitle};
`;
