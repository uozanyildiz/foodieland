import styled from 'styled-components';
import Sidebar from '../../../components/Sidebar';
import { device } from '../../../shared/device';
import { H3, H4 } from '../../../shared/text-style';

export const GuideContainer = styled.div`
	margin-top: 80px;
	display: flex;
	flex-direction: column;
	gap: 40px;

	@media ${device.desktop} {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const GuideSidebar = styled(Sidebar)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	& > h3 {
		margin-bottom: 32px;
	}

	& > img {
		max-width: 100%;
		align-self: center;
	}

	@media ${device.laptop} {
		& > img {
			max-width: unset;
		}
	}
`;

export const IngredientsContainer = styled.div`
	& > h3 {
		${H3}
	}

	& > h4 {
		${H4}
		margin-top: 48px;
	}
`;

export const DirectionsContainer = styled.div`
	margin-top: 88px;
	& > h3 {
		${H3}
	}
`;
