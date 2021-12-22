import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 200px;
  margin: 10px;
  height: 40px;

  &:focus {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`;
