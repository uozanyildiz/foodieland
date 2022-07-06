import styled from 'styled-components';
import { DescriptionText, H1, H2, H3 } from '../../shared/text-style';
export const AboutLogo = styled.img`
	margin-top: 64px;
`;

export const AboutDesc = styled.p`
	${DescriptionText}
`;

export const AboutLocation = styled.iframe`
	margin-top: 80px;
	border: 0;
	width: 100%;
	height: 410px;
`;

export const AboutTitle = styled.h1`
	margin-top: 64px;
	${H1}
	text-align: center;
`;
