import styled from 'styled-components';
import {
	AuthorText,
	BadgeText,
	DescriptionText,
	H3,
} from '../../../shared/text-style';
import Break from '../../../shared/Break';
import { device } from '../../../shared/device';
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

export const AuthorContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 32px;

	img {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 50%;
	}
`;

export const AuthorName = styled.span`
	margin-left: 16px;
	${AuthorText}
	flex-shrink: 1;
`;
export const AuthorDate = styled.span`
	${BadgeText}
	flex-shrink: 1;
`;

export const CardBr = styled(Break)`
	height: 40px;
	width: 1px;
	margin: 0 24px;
`;

export const BlogLink = styled(Link)`
	all: unset;
	cursor: pointer;
`;
