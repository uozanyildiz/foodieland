import React from 'react';
import { InputButton, InputContainer, InputStyle } from './styled';

const Input = ({ text, type, placeholder, className }) => {
	return (
		<InputContainer className={className}>
			<InputStyle type={type} placeholder={placeholder} />
			<InputButton text={text} />
		</InputContainer>
	);
};

export default Input;
