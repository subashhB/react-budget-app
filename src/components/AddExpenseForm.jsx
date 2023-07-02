import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();

  const isSubmitting  = fetcher.state === "submitting";

  const formRef = useRef();
  const focuseRef = useRef();

  useEffect(()=>{
    if(!isSubmitting){
        formRef.current.reset();
        focuseRef.current.focus();
    }
  })

  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Add New{" "}
        <span className="accent">
          {budgets.length === 1 && `${budgets.map((budget) => budget.name)}`}
        </span>{" "}
        Expenses
      </h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="expenses-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense"> Expense Name</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g. Coffee"
              required
              ref={focuseRef}
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">Amount</label>
            <input
              type="number"
              step={0.01}
              inputMode="decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              required
              placeholder="e.g. Rs. 3.50"
            />
          </div>
        </div>
        <div className="grid-xs" hidden={ budgets.length === 1 }>
            <label htmlFor="newExpenseBudget">Budget Category</label>
            <select name="newExpenseBudget" id="newExpenseBudget" required>
                {
                    budgets.sort((a,b)=> a.createdAt - b.createdAt).map((budget)=>(
                        <option key={budget.id} value={budget.id} >{budget.name}</option>
                    ))
                }
            </select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <PlusCircleIcon width={20} />
              <span>Add Expense</span>
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenseForm;
