import styled from 'styled-components';

export const Description = styled.p`
	margin-top: ${(props) => props.mt}px;
	color: ${(props) => props.theme.colors.subtitle};
	font-size: 16px;
	font-weight: 400;
	line-height: clamp(1.25rem, 2vw, 2rem);
	letter-spacing: 0em;
`;
