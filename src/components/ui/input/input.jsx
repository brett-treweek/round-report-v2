import React from 'react';
import { InputContainer, StyledInput, StyledLabel } from './input.styled';

const Input = (props) => {
	return (
		<InputContainer>
			<StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
			<StyledInput
				type={props.type}
				id={props.id}
				value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
			></StyledInput>
		</InputContainer>
	);
};

export default Input;
