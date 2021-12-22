import styled from 'styled-components';

export const TableStyled = styled.table`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: stretch;
  height: 89vh;
  width: 100%;
  box-shadow: 0 0 8px 2px;

  /*   th,
  td,
  thead th,
  tbody td {
     width: auto !important;
  }
 */
  thead {
    /* head takes the height it requires,
    and it's not scaled when table is resized */
    flex: 0 0 auto;
    width: 100%; /* calc(100% - 0.9em); */
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};
    height: 3rem;
    font-size: 12px;
  }
  tbody {
    /* body takes all the remaining available space*/
    /* flex: 1 1 auto;*/
    /* display: block;*/
    overflow-y: scroll;
  }
  tbody tr {
    width: 100%;
  }
  thead,
  tbody tr {
    display: table;
    table-layout: fixed;
  }

  td {
    text-align: center;
    flex-basis: 23%;
    flex-shrink: 0;
    min-width: 0;
  }

  th {
    font-weight: normal;
    font-size: 12px;
  }
`;

/*  */
