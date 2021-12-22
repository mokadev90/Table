import { Table } from './component/Table';
import GlobalStyle from './globalStyle';
import Theme from './theme';

function App() {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Table />
      </Theme>
    </>
  );
}

export default App;
