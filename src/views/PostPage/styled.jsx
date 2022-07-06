import styled from 'styled-components';
import { AuthorText, DescriptionText, H2, H4 } from '../../shared/text-style';
import Break from '../../shared/Break';
import { device } from '../../shared/device';
export const PostPageContainer = styled.div``;

export const PostHeader = styled.div`
	padding: 20px;
	text-align: center;
`;

export const PostTitle = styled.div`
	${H2}
	margin-top: 80px;
`;
export const PostAuthor = styled.div`
	margin-top: 32px;
	& > * {
		vertical-align: middle;
	}
`;

export const AuthorImg = styled.img`
	width: 40px;
	height: 40px;
	object-fit: cover;
	border-radius: 50%;
`;

export const AuthorName = styled.span`
	margin-left: 16px;
	${AuthorText}
`;
export const AuthorBr = styled(Break)`
	height: 40px;
	margin: 0 24px;
`;
export const AuthorDate = styled.span`
	color: rgba(0, 0, 0, 0.6);
	font-size: 14px;
	font-weight: 500;
	line-height: 17px;
	letter-spacing: -0.02em;
`;
export const PostDesc = styled.p`
	${DescriptionText}
	margin-top: 48px;
	text-align: center;
`;
export const PostImg = styled.img`
	margin-top: 64px;
	object-fit: cover;
	height: 100%;
	width: 100%;
	border-radius: 30px;
`;

export const PostContent = styled.div`
	margin-top: 80px;
	display: flex;
	align-items: center;
	gap: 50px;
	flex-direction: column;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		${H4}
		margin-bottom: 24px;
	}

	@media ${device.desktop} {
		flex-direction: row;
	}

	& > div:first-child > p {
		${DescriptionText}
		margin-top: 0;
		margin-bottom: 60px;
		//For images
		display: flex;
		flex-direction: column;
	}

	& > div:first-child > p > img {
		width: 80%;
		object-fit: contain;
		border-radius: 20px;
		margin-bottom: 32px;
	}
`;

export const PostShareContainer = styled.div`
	align-self: center;
	flex-shrink: 0;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 48px;
	margin-bottom: 48px;

	span {
		color: black;
		font-size: 14px;
		font-weight: 600;
		line-height: 17px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	@media ${device.desktop} {
		flex-direction: column;
		align-self: flex-start;
	}
`;

export const MarkdownContainer = styled.div`
	width: 100%;
`;
