import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

  *, *::after, *::before {
    box-sizing: border-box;
    overflow: hidden;
}
::-webkit-scrollbar{width:6px;}
::-webkit-scrollbar-thumb{background-color:${({ theme }) =>
  theme.colors.primary.main};}

body {
    background: ${({ theme }) => theme.colors.bg};
    display: flex;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'sans-serif';
  }

`;

export default GlobalStyle;

/* .page-view {
    position: relative;
    background: var(--color4);
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px);
    transition: all 0.5s ease;
    z-index: 2;
  }

  ${SSidebar}.open ~ .page-view {
    left: 250px;
    width: calc(100% - 250px);
  }

  .page-view .text {
    display: inline-block;
    color: var(--color5);
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
  }

  @media (max-width: 420px) {
    ${STooltip}{
      display: none;
    }
  } */
