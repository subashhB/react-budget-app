const generateRandomColor = () => {
  const existingBudgetsLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetsLength * 34} 65% 50%`;
};

//Local Storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const deleteData = ({key, id})=>{
  const existingData = fetchData(key);
  if(id){
    const newData = existingData.filter((item)=> item.id !== id)
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
}

export const getAllMatchingItems = ({category, key, value})=>{
  const data = fetchData(category) ?? [];
  return data.filter((item)=> item[key] === value);
}

export const createBudget = ({ name, amount }) => {
  const newBudget = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    createAt: Date.now(),
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newBudget])
  );
};

export const createExpense = ({ name, amount, budgetId }) => {
  const newExpense = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    createdAt: Date.now(),
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newExpense])
  );
};

export const calculateSpentByBudget = (budgetId) =>{
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense)=>{
    //check if expense budget id === budget id
    if(expense.budgetId !== budgetId) return acc;
    return acc += expense.amount;
  }, 0)
  return budgetSpent;
}

export const formatDate = (date) =>  new Date(date).toLocaleDateString();


export const formatPercentage = (amount)=>{
  return amount.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  })
}

export const formatCurrency =(amount)=>{
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "NPR"
  })
}
