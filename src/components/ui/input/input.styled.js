import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`
export const StyledLabel = styled.label`
    color: ${({theme}) => theme.textLight};
    font-size: 0.8rem;
`
export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 1rem;
`;

