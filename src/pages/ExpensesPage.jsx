import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Table from "../components/Table";

export const expensesLoader = () => {
  const expenses = fetchData("expenses");
  return { expenses };
};

const ExpensesPage = () => {
  const { expenses } = useLoaderData();
  return (
    <div className="grid-lg">
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Expenses <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No Expenses to Show.</p>
      )}
    </div>
  );
};

export default ExpensesPage;
