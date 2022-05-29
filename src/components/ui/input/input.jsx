import React from 'react';
import {
	InputContainer,
	StyledInput,
	StyledLabel,
	StyledSelect,
} from './input.styled';

const Input = ({
	label,
	name,
	type,
	value,
	handleChange,
	autoComplete,
	options,
	min,
	max
}) => {
	return (
		<InputContainer>
			<StyledLabel htmlFor={name}>{label || name}</StyledLabel>
			{type === 'select' ? (
				<StyledSelect
					type={type}
					name={name}
					value={value}
					onChange={handleChange}
					autoComplete={autoComplete}
					options={options}
				>
					{options.map((variety, index) => {
						return (
							<option key={index} value={variety}>
								{variety}
							</option>
						);
					})}
				</StyledSelect>
			) : (
				<StyledInput
					type={type}
					name={name}
					value={value}
					onChange={handleChange}
					autoComplete={autoComplete}
					min={min}
					max={max}
				></StyledInput>
			)}
		</InputContainer>
	);
};

export default Input;
