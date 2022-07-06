import styled from 'styled-components';
import Button from '../../shared/Button';
import { device } from '../../shared/device';
import { H2 } from '../../shared/text-style';

export const SubscribeContainer = styled.div`
	background: url('img/sb-card-bg.png');
	background-color: ${(props) => props.theme.colors.blue};
	background-position: bottom;
	background-size: contain;
	background-repeat: no-repeat;

	text-align: center;
	max-height: 442px;
	max-width: max-content;
	margin: 0 auto;
	margin-top: ${(props) => props.mt}px;
	padding: 40px 16px;
	border-radius: 65px;

	@media ${device.mobile} {
		padding: 50px 16px;
	}

	@media ${device.tablet} {
		padding: 60px 50px;
	}

	@media ${device.laptop} {
		padding: 70px 96px;
	}

	@media ${device.desktop} {
		padding: 80px 128px;
	}
`;

export const Title = styled.h2`
	${H2}
`;

export const SubscribeAction = styled.div`
	background-color: #fff;
	border-radius: 24px;
	margin-bottom: clamp(2.5rem, 5vh, 5rem);
	margin: 16px auto;
	width: clamp(12.5rem, 50vw, 15rem);

	@media ${device.mobile} {
		margin: 32px auto;
	}

	@media ${device.tablet} {
		width: 440px;
		margin: 48px auto;
	}

	@media ${device.laptop} {
		width: 460px;
		margin: 48px auto;
	}

	@media ${device.desktop} {
		width: 480px;
		margin: 64px auto;
	}
`;

export const SubscribeButton = styled(Button)`
	padding: 14px 40px;
	display: block;
	border-top-left-radius: 0;
	border-top-right-radius: 0;

	@media ${device.mobile} {
		padding: 14px 36px;
	}
	@media ${device.tablet} {
		display: inline;
		border-radius: 16px;
		padding: 18px 46px;
		margin-left: 32px;
	}
	@media ${device.laptop} {
		padding: 20px 46px;
		margin-left: 48px;
	}
	@media ${device.desktop} {
		padding: 22px 48px;
		margin-left: 64px;
	}
`;

export const SubscribeInput = styled.input.attrs({
	type: 'email',
	placeholder: 'Your email address...',
})`
	all: unset;
	font-size: 14px;
	font-weight: 500;
	line-height: 17px;
	text-align: center;
	&::placeholder {
		color: rgba(0, 0, 0, 0.4);
	}
	padding: 20px 8px;

	@media ${device.mobile} {
		padding: 20px 6px;
		width: 200px;
	}
	@media ${device.tablet} {
		padding: 26px 12px;
		text-align: start;
	}
	@media ${device.laptop} {
		padding: 28px 16px;
	}
	@media ${device.desktop} {
		padding: 32px 16px;
	}
`;
