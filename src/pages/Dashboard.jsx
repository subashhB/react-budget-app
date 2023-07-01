import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
};

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (error) {
    throw new Error("There was a problem creating you account.");
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return <div>{userName ? <div className="dashboard">
    <h1>Welcome, <span className="accent">{userName}</span></h1>
    <div className="grid-sm">
      <div className="grid-lg">
        <div className="flex-lg">
          <AddBudgetForm/>
        </div>
      </div>
    </div>
  </div> : <Intro />}</div>;
};

export default Dashboard;
