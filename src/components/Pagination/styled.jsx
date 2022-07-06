import styled from 'styled-components';
import { css } from 'styled-components';
import Button from '../../shared/Button';

export const PaginationContainer = styled.ul`
	margin-top: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	list-style-type: none;
	gap: 16px;
`;

export const PageButton = styled(Button)`
	padding: 20px 24px;
	${(props) =>
		!props.isActive &&
		css`
			background-color: #fff;
			padding: 20px 23px;
			border: 1px solid rgba(0, 0, 0, 0.1);
			color: black;
		`}
`;
