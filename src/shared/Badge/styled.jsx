import styled from 'styled-components';
import { css } from 'styled-components';
import { SubtitleFaded, SubtitleSpaced } from '../text-style';

export const BadgeContainer = styled.div`
	align-self: center;
	display: flex;
	align-items: center;
	gap: 16px;

	& > svg {
		width: 24px;
		height: 24px;
		vertical-align: middle;
	}

	& > div > span {
		display: block;
		${SubtitleFaded}
	}

	${(props) =>
		props.hasTitle &&
		css`
			& > div > span:nth-child(1) {
				${SubtitleSpaced}
				color: #000;
			}

			& > div > span:nth-child(2) {
				vertical-align: middle;
				margin-top: 8px;
			}
		`}
`;
