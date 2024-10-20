import { TableData } from "../types/types";

type TableProps = {
  tableData: TableData;
};

const Table = (props: TableProps) => {
  const { columns, rows } = props.tableData;

  return (
    <div className="container my-4">
      <table className="table w-full">
        <thead className="min=w-full">
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={column.accessor}>{item[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
