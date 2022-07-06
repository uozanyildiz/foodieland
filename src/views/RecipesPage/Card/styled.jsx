import styled from 'styled-components';
import { DescriptionText, H3 } from '../../../shared/text-style';
import Break from '../../../shared/Break';
import { device } from '../../../shared/device';
import Badge from '../../../shared/Badge';
import { Link } from 'react-router-dom';
export const CardContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 40px;

	//Recipe info
	& > div {
		//Title
		h3 {
			${H3}
		}
		//Description
		p {
			${DescriptionText}
			margin-top: 16px;
			font-size: 14px;
			line-height: 24px;

			@media ${device.tablet} {
				font-size: 16px;
				line-height: 28px;
			}
		}
	}
`;

export const CardImg = styled.img`
	width: 15vw;
	height: 20vh;
	border-radius: 20px;
	object-fit: cover;
`;

export const CardBadge = styled(Badge)`
	background-color: ${(props) => props.theme.colors.blue};
	border-radius: 12px;
	padding: 6px;
	gap: 8px;
`;

export const BadgeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;
	flex-direction: row;
	margin-top: 12px;
`;

export const CardBr = styled(Break)`
	height: 40px;
	width: 1px;
	margin: 0 12px;
`;

export const RecipeLink = styled(Link)`
	all: unset;
	cursor: pointer;
`;
