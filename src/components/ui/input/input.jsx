import React from 'react';
import { InputContainer, StyledInput, StyledLabel } from './input.styled';

const Input = (props) => {
	return (
		<InputContainer>
			<StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
			<StyledInput
				type={props.type}
				id={props.id}
				name={props.name}
				value={props.value}
				onChange={props.handleChange}
				autoComplete={props.autoComplete}
			></StyledInput>
		</InputContainer>
	);
};

export default Input;
