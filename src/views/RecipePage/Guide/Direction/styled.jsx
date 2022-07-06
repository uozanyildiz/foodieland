import styled from 'styled-components';
import Break from '../../../../shared/Break';
import Checklist from '../../../../shared/Checklist';
import { DescriptionText, H4 } from '../../../../shared/text-style';

export const DirectionContainer = styled.div``;

export const DirectionChecklist = styled(Checklist)`
	& > div > span {
		${H4}
	}
`;

export const DirectionDescription = styled.p`
	${DescriptionText}
	margin-top: 24px;
	margin-left: 48px;
	& > p > img {
		border-radius: 20px;
		object-fit: contain;
		width: 100%;
		margin: 48px 0;
	}
`;

export const DirectionBr = styled(Break)`
	width: 100%;
	height: 1px;
	margin: 48px 0;
`;
