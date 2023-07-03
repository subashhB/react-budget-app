import ExpenseItem from "./ExpenseItem"

const Table = ({expenses, showBudget=true}) => {
  return (
    <div className="table">
        <table>
            <thead>
                <tr>
                    {
                        ["Name", "Amount", "Date",showBudget ? "Budget": "" ,""].map((i,index)=>(
                            <th key={index}>{i}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((expense)=>(
                        <tr key={expense.id}>
                            <ExpenseItem showBudget={showBudget} expense={expense} key={expense.id} />
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table