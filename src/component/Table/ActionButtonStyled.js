import styled from 'styled-components';

export const ActionButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  padding: 2px;

  svg {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.primary.lighter};

    :hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
