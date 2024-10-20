import { useState } from 'react';
import { TableData } from '../types/types';
import { filterItemsBy } from '../utils/utils';

type TableProps = {
  tableData: TableData;
};

const Table = (props: TableProps) => {
  const { columns, rows } = props.tableData;

  // if adding pagination etc at a later stage, use useState to append the next page of results to the cache
  const tableRowsCache = rows;
  const [filteredRows, setFilteredRows] = useState(rows);
  const [filterColumn, setFilterColumn] = useState('');
  const [filterCondition, setFilterCondition] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleFilter = () => {
    const filteredRows = filterItemsBy(
      tableRowsCache,
      filterColumn,
      filterValue,
      filterCondition
    );
    setFilteredRows(filteredRows);
  };

  const clearFilters = () => {
    setFilterColumn('');
    setFilterCondition('');
    setFilterValue('');
    setFilteredRows(tableRowsCache);
  };
  return (
    <>
      <div className="container flex items-end gap-4">
        <label className=" w-full max-w-x">
          <div className="label">
            <span className="label-text">Filter column:</span>
          </div>
          <select
            id="filter-column-select"
            className="select select-bordered"
            value={filterColumn}
            onChange={(e) => setFilterColumn(e.target.value)}
          >
            <option value="">Select a column</option>
            {columns.map((column) => (
              <option key={column.accessor} value={column.accessor}>
                {column.header}
              </option>
            ))}
          </select>
        </label>
        <label className=" w-full max-w-x">
          <div className="label">
            <span className="label-text">Filter condition:</span>
          </div>
          <select
            id="filter-condition-select"
            className="select select-bordered"
            value={filterCondition}
            onChange={(e) => setFilterCondition(e.target.value)}
          >
            <option value="">Select a condition</option>
            <option value="equals">Equals</option>
            <option value="contains">Contains</option>
          </select>
        </label>
        <label className="w-full max-w-x">
          <div className="label">
            <span className="label-text">Filter value:</span>
          </div>
          <input
            id="filter-value-input"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-md w-full max-w-xs"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </label>
        <button
          className="btn btn-outline btn-primary mx-2"
          onClick={handleFilter}
        >
          Go!
        </button>
        <button
          className="btn btn-outline btn-primary mx-2"
          onClick={clearFilters}
        >
          Reset
        </button>
      </div>
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
            {filteredRows.map((item) => (
              <tr key={item.id}>
                {columns.map((column) => (
                  <td key={column.accessor}>{item[column.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
