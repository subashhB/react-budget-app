import { useLoaderData } from "react-router-dom";
import { deleteData, fetchData } from "../helpers";
import Table from "../components/Table";
import { toast } from "react-toastify";

export const expensesLoader = () => {
  const expenses = fetchData("expenses");
  return { expenses };
};

export  const expensesAction = async({ request })=>{
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data);
  if (_action === "deleteExpense") {
    try {
      deleteData({
        key: "expenses",
        id: values.expenseId,
      })
      return toast.success("Expense Deleted!");
    } catch (error) {
      throw new Error("There was a problem deleting your Expense");
    }
  }
}

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
