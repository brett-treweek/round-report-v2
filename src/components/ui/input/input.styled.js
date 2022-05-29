import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`
export const StyledLabel = styled.label`
    color: ${({theme}) => theme.text};
    font-size: 0.8rem;
    font-weight: 500;
`
export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 1rem;
`;

export const StyledSelect = styled.select`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 0.2rem;
    margin-bottom: 1rem;
`;

