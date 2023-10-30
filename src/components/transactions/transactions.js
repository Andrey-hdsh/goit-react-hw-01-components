import { BodyRow, Table, TableHead } from './transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>
      <tbody>
        {items.map(item => (
          <BodyRow key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </BodyRow>
        ))}
      </tbody>
    </Table>
  );
};
