import styled from 'styled-components';
import Button from '../../../shared/Button';
import { device } from '../../../shared/device';
import { CategoryText, H2 } from '../../../shared/text-style';

export const CategoryContainer = styled.div`
	margin-top: 160px;
`;

export const CategoryHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CategoryTitle = styled.h2`
	${H2}
`;

export const CategoryButton = styled(Button)`
	background-color: ${(props) => props.theme.colors.cardBg};
	color: #000;
	font-size: 16px;
	padding: 20px 27px;
`;

export const CategoryList = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 80px;
`;

export const CategoryItem = styled.a`
	padding: 0 40px;
	padding-bottom: 30px;
	border-radius: 30px;
	height: 50%;
	background: linear-gradient(
		180deg,
		rgba(112, 130, 70, 0) 0%,
		rgba(112, 130, 70, 0.1) 100%
	);
`;

export const ItemImg = styled.img`
	position: relative;
	max-width: 100px;
	max-height: 100px;
	transition: all 0.3s;
	//Blurred background
	/* background: url(${(props) => props.src});
	background-size: 100px 100px;
	&::before {
		position: absolute;
		z-index: -1;
		content: url(${(props) => props.src});
		filter: blur(15px) opacity(0.4);
		bottom: -30px;
		right: -30px;
	} */

	&:hover {
		transform: scale(1.2) translateY(-16px);
	}
`;
export const ItemName = styled.h3`
	margin-top: 50px;
	${CategoryText}
`;
