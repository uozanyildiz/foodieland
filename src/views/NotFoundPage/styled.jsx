import styled from 'styled-components';
import { DescriptionText, H2 } from '../../shared/text-style';
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 32px;
`;

export const PageTitle = styled.h2`
	${H2}
	margin-top: 85px;
`;

export const PageText = styled.p`
	${DescriptionText}
	margin-top: 0;
	margin-bottom: 16px;
`;
