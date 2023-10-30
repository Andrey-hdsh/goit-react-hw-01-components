import styled from 'styled-components';

export const Table = styled.table`
  text-align: center;
  margin: 0 auto;
  width: 90%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  tr {
    th {
      color: white;
      background-color: #52d0fa;
      font-weight: bold;
      padding: 10px;
      border: 1px solid #ccc;
    }
  }
`;
export const BodyRow = styled.tr`
  text-align: center;
  font-size: small;
  color: rgba(17, 17, 17, 0.50);
  &:nth-child(even) {
    background-color: #f0f2f2;
  }
  td {
    margin-left: 20px;
    padding: 10px;
    border: 1px solid #ccc;
  }
`;
