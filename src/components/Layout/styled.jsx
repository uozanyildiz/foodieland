import styled from 'styled-components';
import { device } from '../../shared/device';
export const LayoutContainer = styled.div`
	margin: 10px 20px;

	@media ${device.mobile} {
		margin: 20px 50px;
	}

	@media ${device.tablet} {
		margin: 60px 125px;
	}

	@media ${device.laptop} {
		margin: 50px 200px;
	}

	@media ${device.desktop} {
		margin: 60px 250px;
	}
`;
