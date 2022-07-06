import styled from 'styled-components';
import Button from '../../../shared/Button';
import { device } from '../../../shared/device';
import { H2 } from '../../../shared/text-style';

export const SectionContainer = styled.div`
	margin-top: 144px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	gap: 50px;
	flex-direction: column-reverse;
	@media ${device.laptop} {
		gap: 100px;
		flex-direction: row;
	}
`;

export const SectionTitle = styled.h2`
	${H2}
`;

export const SectionText = styled.div`
	flex-shrink: 0;
	width: 75%;
	padding-right: 12px;
	text-align: left;

	@media ${device.laptop} {
		width: 50%;
	}
`;

export const SectionImgWrapper = styled.div`
	flex-shrink: 1;
	border-radius: 40px;
	background: ${(props) => props.theme.colors.blueToWhiteBg};
	width: 75%;
	height: 75%;

	@media ${device.laptop} {
		width: 100%;
		height: 100%;
	}
`;

export const SectionImg = styled.img`
	object-fit: contain;
	vertical-align: bottom;
	max-width: 100%;
	max-height: 100%;
	@media ${device.laptop} {
		max-width: 100%;
		max-height: 100%;
	}
`;

export const SectionButton = styled(Button)`
	display: inline-block;
	padding: 22px 52px;
	margin-top: 48px;

	@media ${device.laptop} {
		margin-top: 80px;
	}
`;
