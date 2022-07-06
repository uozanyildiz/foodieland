import styled from 'styled-components';
import Button from '../../../shared/Button';
import { device } from '../../../shared/device';

export const InputContainer = styled.div`
	background-color: #fff;
	border-radius: 24px;
	margin: 80px auto;
	border: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	width: max-content;
`;

export const InputButton = styled(Button)`
	padding: 22px 40px;
	margin: 10px;

	@media ${device.mobile} {
		padding: 22px 48px;
	}

	@media ${device.tablet} {
		padding: 22px 58px;
	}
`;

export const InputStyle = styled.input.attrs((props) => ({
	type: props.type,
	placeholder: props.placeholder,
}))`
	all: unset;
	width: 120px;
	font-size: 14px;
	font-weight: 500;
	line-height: 17px;
	padding: 32px;
	&::placeholder {
		color: rgba(0, 0, 0, 0.4);
	}

	@media ${device.mobile} {
		width: 220px;
		padding: 16px;
	}

	@media ${device.tablet} {
		width: 320px;
	}
`;
