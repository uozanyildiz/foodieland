import styled from 'styled-components';

const Break = styled.div`
	display: inline-block;
	width: ${(props) => (props.$width !== '1px' ? props.$width : '1px')};
	height: ${(props) => (props.$height !== '1px' ? props.$height : '1px')};
	border: 1px solid rgba(0, 0, 0, 0.1);
`;

export default Break;
