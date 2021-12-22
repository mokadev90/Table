import styled from 'styled-components';

export const ButtonStyled = styled.button`
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.primary.main};
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary.light : theme.colors.white};
  font-size: 1rem;
  padding: 0.25rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary.dark};
  border-radius: 20px;
  font-weight: bold;
  margin: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.lighter}; /*
    color: ${({ theme }) => theme.colors.primary.dark}; */
  }
`;
