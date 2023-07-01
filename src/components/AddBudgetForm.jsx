import { CurrencyRupeeIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <Form method="post">
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g. Groceries"
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmout">Budget Amount</label>
          <input
            type="number"
            step="0.01"
            placeholder="e.g. Rs. 350"
            inputMode="decimal"
            name="newBudgetAmout"
            id="newBudgetAmount"
            required
          />
        </div>
        <button type="submit" className="btn btn--dark"><PlusIcon width={20}/> <span>Create Budget</span></button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
