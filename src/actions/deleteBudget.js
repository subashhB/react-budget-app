import { toast } from "react-toastify";
import { deleteData, getAllMatchingItems } from "../helpers";
import { redirect } from "react-router-dom";

export function deleteBudget({ params }) {
  try {
    deleteData({ key: "budgets", id: params.id });
    const expenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });
    expenses.forEach((expense) => {
      deleteData({
        key: "expenses",
        id: expense.id,
      });
    });
    toast.success("Budget Deleted Successfully!");
  } catch (error) {
    throw new Error("There was a problem deleting the budget.");
  }
  return redirect("/");
}
