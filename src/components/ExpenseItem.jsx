import { formatCurrency, formatDate } from "../helpers";

const ExpenseItem = ({ expense }) => {
    const { name, amount, createdAt } = expense;
  return <>
  <td>{ name }</td>
  <td>{ formatCurrency(amount) }</td>
  <td>{ formatDate(createdAt) }</td>
  </>;
};

export default ExpenseItem;
