import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import { device } from '../../shared/device';
import { DescriptionText, H1, H2, H3 } from '../../shared/text-style';

export const Header = styled.div`
	margin-top: 85px;
`;

export const HeaderTitle = styled.h2`
	${H1}
	text-align: center;
`;

export const HeaderDescription = styled.p`
	${DescriptionText}
	margin-top: 24px;
	text-align: center;
`;

export const ContentContainer = styled.div`
	display: block;
	gap: 60px;

	@media ${device.desktop} {
		display: flex;
	}
`;

export const RecipeContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 96px;
`;

export const RecipeSidebar = styled(Sidebar)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 64px;
	& > h3 {
		${H2}
		margin-bottom: 32px;
		align-self: center;
	}

	& > img {
		align-self: center;
	}

	@media ${device.desktop} {
		margin-top: 0px;

		& > img:last-child {
			width: 100%;
		}

		& > h3 {
			${H3}
			margin-bottom: 32px;
			align-self: auto;
		}
	}
`;
