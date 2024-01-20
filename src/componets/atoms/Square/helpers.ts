export const determineIsDark = (
  columnIndex: number,
  rowIndex: number
): boolean => {
  return rowIndex % 2 ? columnIndex % 2 === 0 : columnIndex % 2 !== 0;
};
