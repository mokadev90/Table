import styled from 'styled-components';

export const TableHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary.light};
    margin: 0.3rem;
    z-index: 5;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 1.5rem;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.primary.lighter};
  }
`;
