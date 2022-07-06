import styled from 'styled-components';
import { device } from '../../shared/device';

export const FooterContainer = styled.div`
	margin-top: 132px;
`;

export const FooterUpper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 48px;
	gap: 32px;

	@media ${device.laptop} {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
`;

export const FooterInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;

	p {
		text-align: center;
	}

	@media ${device.laptop} {
		p {
			text-align: start;
		}
	}
`;

export const FooterLogo = styled.img`
	width: 110px;

	@media ${device.laptop} {
		align-self: flex-start;
	}
`;

export const FooterLink = styled.div`
	align-self: center;

	ul {
		display: flex;
		gap: 32px;
	}

	ul > li {
		all: unset;
		font-size: 16px;
		font-weight: 500;
		line-height: 19px;
		cursor: pointer;
		flex-shrink: 0;
	}

	ul > li > a {
		all: unset;
	}

	@media ${device.desktop} {
		ul {
			gap: 60px;
		}
	}
`;
export const FooterBr = styled.div`
	height: 1px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	margin-bottom: 48px;
`;
export const FooterCopyright = styled.div`
	text-align: center;
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	color: rgba(0, 0, 0, 0.6);
`;

export const ExternalLink = styled.a`
	all: unset;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:hover {
		color: rgba(0, 0, 0, 0.75);
	}
`;
