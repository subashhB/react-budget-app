 const generateRandomColor = ()=>{
    const existingBudgetsLength = fetchData("budgets")?.length ?? 0;
    return  `${existingBudgetsLength *34} 65% 50%`;
 }

//Local Storage
export const fetchData = (key)=>{
    return(JSON.parse(localStorage.getItem(key)));
}

export const createBudget = ({
    name, amount
})=>{
    const newBudget ={
        id: crypto.randomUUID(),
        name: name,
        amount: +amount,
        createAt: Date.now(),
        color: generateRandomColor(),

    }
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newBudget]))
}

//Delete Item
export const deleteData = ({ key })=>{
   return localStorage.removeItem(key);
}