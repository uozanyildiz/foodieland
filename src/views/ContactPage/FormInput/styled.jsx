import styled from 'styled-components';
export const FormInputContainer = styled.div`
	width: 100%;

	span {
		display: block;
		color: rgba(0, 0, 0, 0.6);
		font-size: 12px;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	input {
		all: unset;
		margin-top: 12px;
		border-radius: 16px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		width: 94%;
		padding: 20px 10px;
		&:focus {
			border: 1px solid rgba(0, 0, 0, 0.3);
		}
	}
`;

export const MessageInputContainer = styled.div`
	width: 100%;

	span {
		color: rgba(0, 0, 0, 0.6);
		font-size: 12px;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	textarea {
		all: unset;
		border: 1px solid rgba(0, 0, 0, 0.1);
		margin-top: 12px;
		border-radius: 16px;
		padding: 20px 18px;
		width: 100%;

		&:focus {
			border: 1px solid rgba(0, 0, 0, 0.3);
		}
	}
`;
