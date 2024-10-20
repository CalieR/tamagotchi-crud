// Formatting functions

export const formatDate = (value: string) => {
  const date = new Date(value);
  const monthDayYear = date.toLocaleDateString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return monthDayYear;
};

// Filtering functions

export const filterItemsBy = (
  dataToSort: Record<string, string | number>[],
  columnName: string,
  value: string | number,
  operator: string
) => {
  return dataToSort.filter((row: Record<string, string | number>) =>
    determineOperator(operator, row[columnName], value)
  );
};

const determineOperator = (
  operator: string,
  rowValue: string | number,
  value: string | number
) => {
  console.log(rowValue);
  switch (operator) {
    case 'equals':
      return rowValue === value;
    case 'contains':
      return rowValue.toString().includes(value.toString());
    default:
      return false;
  }
};
