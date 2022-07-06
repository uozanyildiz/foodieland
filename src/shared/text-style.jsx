import { css } from 'styled-components';
import { device } from './device';
export const NavText = css`
	font-size: 1rem;
	font-weight: 500;
	line-height: 19px;
	letter-spacing: -0.02em;

	@media ${device.laptop} {
		font-size: 0.75rem;
	}

	@media ${device.desktop} {
		font-size: 1rem;
	}
`;

export const CategoryText = css`
	font-size: 18px;
	font-weight: 600;
	line-height: 22px;
	letter-spacing: -0.02em;
	text-align: center;
`;
export const H1 = css`
	font-size: clamp(2rem, 4vw, 4rem); // 64px
	font-weight: 600;
	line-height: clamp(3rem, 5vw, 5rem); // 80px
	letter-spacing: -0.04em;
`;

export const H2 = css`
	font-size: clamp(1.5rem, 3vw, 3rem); // 48px
	font-weight: 600;
	line-height: clamp(1.5rem, 3.75vw, 3.75rem); // 60px
	letter-spacing: -0.04em;
`;

export const H3 = css`
	font-size: clamp(1.25rem, 2.25vw, 2.25rem); // 36px
	font-weight: 600;
	line-height: clamp(1.5rem, 2.75vw, 2.75rem); // 44px
	letter-spacing: -0.04em;
`;

export const H4 = css`
	font-size: clamp(1.25rem, 1.5vw, 1.5rem); // 24px
	font-weight: 600;
	line-height: clamp(1.25rem, 1.5vw, 1.75rem); // 29px
	letter-spacing: -0.04em;
`;

export const P = css`
	font-size: 16px;
	font-weight: 400;
	line-height: 28px;
	letter-spacing: 0em;
`;

export const SubtitleSpaced = css`
	font-size: 12px;
	font-weight: 500;
	line-height: 15px;
	letter-spacing: 0.1em;
	text-transform: uppercase;
`;

export const SubtitleFaded = css`
	font-size: 14px;
	font-weight: 500;
	line-height: 17px;
	letter-spacing: -0.02em;
	color: ${(props) => props.theme.colors.subtitle};
`;

export const DescriptionText = css`
	margin-top: 80px;
	font-size: clamp(14px, 1vw, 16px);
	font-weight: 400;
	line-height: clamp(20px, 1.75vw, 28px); //28px
	text-align: left;
	color: rgba(0, 0, 0, 0.6);
`;

export const AuthorText = css`
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: -0.02em;
`;

export const BadgeText = css`
	color: rgba(0, 0, 0, 0.6);
	font-size: 14px;
	font-weight: 500;
	line-height: 17px;
	letter-spacing: -0.02em;
`;
