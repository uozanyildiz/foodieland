import React from 'react';
import { FormInputContainer, MessageInputContainer } from './styled';

export const MessageInput = ({ label, placeholder }) => {
	return (
		<MessageInputContainer>
			<span>{label}</span>
			<textarea placeholder={placeholder} rows='5' />
		</MessageInputContainer>
	);
};

const FormInput = ({ type, label, placeholder }) => {
	return (
		<FormInputContainer>
			<span>{label}</span>
			<input type={type} placeholder={placeholder} />
		</FormInputContainer>
	);
};

export default FormInput;
