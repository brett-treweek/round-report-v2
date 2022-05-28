import React from 'react';
import { InputContainer, StyledInput, StyledLabel } from './input.styled';

const Input = ({label, name, type, value, handleChange, autoComplete}) => {
	return (
		<InputContainer>
			<StyledLabel htmlFor={name}>{label || name}</StyledLabel>
			<StyledInput
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
				autoComplete={autoComplete}
			></StyledInput>
		</InputContainer>
	);
};

export default Input;
