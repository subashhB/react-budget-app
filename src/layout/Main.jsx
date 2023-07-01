
import wave from "../assets/wave.svg";

import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers"
import Nav from "../components/Nav";

export const mainLoader = ()=>{
    const userName = fetchData("userName");
    return { userName };
}

const Main = () => {
    const { userName } = useLoaderData()
  return (
    <div className="layout">
        <Nav username={userName}/>
        <main>
          <Outlet/>
        </main>
        <img src={wave} alt=""/>
    </div>
  )
}

export default Main