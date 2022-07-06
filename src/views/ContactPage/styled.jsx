import styled from 'styled-components';
import Button from '../../shared/Button';
import { device } from '../../shared/device';
import { H1 } from '../../shared/text-style';
export const ContactContainer = styled.div`
	& > div {
		margin-top: 80px;
		display: flex;
		align-items: flex-start;
		gap: 40px;
	}
`;
export const ContactTitle = styled.h2`
	${H1}
	margin-top: 80px;
	text-align: center;
`;
export const ContactImg = styled.img`
	height: auto;
	/* width: 250px; */
	width: 21.5vw;
	padding: 0 20px;
	background: ${(props) => props.theme.colors.blueToWhiteBg};
	border-radius: 30px;
	object-fit: cover;
	display: none;

	@media ${device.desktop} {
		display: block;
	}
`;

export const FormGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 24px;
	width: 100%;
	flex-direction: column;

	@media ${device.desktop} {
		flex-direction: row;
		gap: 80px;
	}
`;

export const FormContainer = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;
	gap: 24px;
	flex-direction: column;
`;

export const FormButton = styled(Button)`
	width: min-content;
	padding: 20px 64px;

	@media ${device.desktop} {
		align-self: flex-start;
	}
`;
