import styled from 'styled-components';
import { device } from '../../shared/device';
import { DescriptionText } from '../../shared/text-style';

export const RecipeDesc = styled.p`
	${DescriptionText}
	font-size: 14px;
	@media ${device.mobile} {
		font-size: 16px;
	}
`;
