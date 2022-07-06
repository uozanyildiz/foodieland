import styled from 'styled-components';
import { css } from 'styled-components';
import Break from '../Break';
import { ReactComponent as CheckedIcon } from './assets/checked.svg';

export const ChecklistContainer = styled.div`
	margin-top: 32px;
	& > div {
		display: flex;
		vertical-align: middle;
		gap: 24px;
	}
`;

export const ChecklistBr = styled(Break)`
	margin-top: 33px;
	width: 100%;
	height: 1px;
`;

export const Unchecked = styled.div`
	flex-shrink: 0;
	vertical-align: top;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 2px solid #dbe2e5;
	user-select: none;
	cursor: pointer;
`;

export const Checked = styled(CheckedIcon)`
	flex-shrink: 0;
	width: 24px;
	height: 24px;
	user-select: none;
	cursor: pointer;
`;

export const ChecklistText = styled.span`
	transition: all 0.3s;
	font-size: ${(props) => (props.checked ? '16px' : '18px')};
	line-height: 22px;
	font-weight: 400;
	letter-spacing: -0.02em;
	color: #000;
	${(props) =>
		props.checked &&
		css`
			text-decoration: line-through;
			opacity: 0.2;
		`}
	cursor: pointer;
`;
