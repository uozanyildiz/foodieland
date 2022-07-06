import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';

export const ButtonLink = styled(Link)`
	all: unset;
`;

export const ButtonStyle = styled.a`
	all: unset;
	cursor: pointer;
	padding: 18px 36px;
	border-radius: 16px;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: -0.02em;
	background-color: #000;
	color: #fff;

	${(props) =>
		props.hasIcon &&
		css`
			display: flex;
			align-items: center;

			& > svg {
				margin-left: 15px;
			}
		`}
`;
