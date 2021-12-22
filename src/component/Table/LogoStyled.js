import styled from 'styled-components';

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary.lighter};
  z-index: 10;
  font-size: 1rem;
  img {
    width: 30px;
    height: 30px;
    margin: 10px;
  }
`;
