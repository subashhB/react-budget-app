import { CurrencyRupeeIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <Form method="post" className="grid-sm">
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
          <label htmlFor="newBudgetAmount">Budget Amount</label>
          <input
            type="number"
            step="0.01"
            placeholder="e.g. Rs. 350"
            inputMode="decimal"
            name="newBudgetAmount"
            id="newBudgetAmount"
            required
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark"><PlusIcon width={20}/> <span>Create Budget</span></button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
