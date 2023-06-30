import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export const dashboardLoader = ()=>{
    const userName = fetchData("userName");
    return { userName };
}

const Dashboard = () => {
    const { userName } = useLoaderData();
  return <div>
    <h3>{ userName }</h3>
    Dashboard</div>;
};

export default Dashboard;
