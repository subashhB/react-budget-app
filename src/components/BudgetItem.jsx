import { Form, Link } from "react-router-dom";
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";

import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/solid";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);
  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{spent} spent</small>
        <small>{amount - spent} remaining</small>
      </div>
      {showDelete ? (
        <div className="flex-sm">
          <Form method="post" action="delete" onSubmit={(event)=>{
            if(!confirm("Are you sure you want to delete this budget?")){
              event.preventDefault();
            }
          }}>
            <button type="submit" className="btn"><TrashIcon width={20}/><spna>Delete Budget</spna></button>
          </Form>
        </div>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn">
            <BanknotesIcon width={20} />
            <span>View Details</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BudgetItem;
