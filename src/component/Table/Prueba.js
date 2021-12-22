import './pruebaStyle.css';

const Prueba = () => {
  return (
    <div className="parentTbl">
      <table>
        <tr>
          <td>
            <div className="childTbl">
              <table className="childTbl">
                <thead>
                  <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                    <th>Header 4</th>
                    <th>Header 5</th>
                    <th>Header 6</th>
                  </tr>
                </thead>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="scrollData childTbl">
              <table>
                <tbody>
                  <tr>
                    <td>Table Data 1</td>
                    <td>Table Data 2</td>
                    <td>Table Data 3</td>
                    <td>Table Data 4</td>
                    <td>Table Data 5</td>
                    <td>Table Data 6</td>
                  </tr>
                  <tr>
                    <td>Table Data 1</td>
                    <td>Table Data 2</td>
                    <td>Table Data 3</td>
                    <td>Table Data 4</td>
                    <td>Table Data 5</td>
                    <td>Table Data 6</td>
                  </tr>
                  <tr>
                    <td>Table Data 1</td>
                    <td>Table Data 2</td>
                    <td>Table Data 3</td>
                    <td>Table Data 4</td>
                    <td>Table Data 5</td>
                    <td>Table Data 6</td>
                  </tr>
                  <tr>
                    <td>Table Data 1</td>
                    <td>Table Data 2</td>
                    <td>Table Data 3</td>
                    <td>Table Data 4</td>
                    <td>Table Data 5</td>
                    <td>Table Data 6</td>
                  </tr>
                  <tr>
                    <td>Table Data 1</td>
                    <td>Table Data 2</td>
                    <td>Table Data 3</td>
                    <td>Table Data 4</td>
                    <td>Table Data 5</td>
                    <td>Table Data 6</td>
                  </tr>
                  <tr>
                    <td>Table Data 1</td>
                    <td>Table Data 2</td>
                    <td>Table Data 3</td>
                    <td>Table Data 4</td>
                    <td>Table Data 5</td>
                    <td>Table Data 6</td>
                  </tr>
                  <tr>
                    <td>Table Data 1</td>
                    <td>Table Data 2</td>
                    <td>Table Data 3</td>
                    <td>Table Data 4</td>
                    <td>Table Data 5</td>
                    <td>Table Data 6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Prueba;
