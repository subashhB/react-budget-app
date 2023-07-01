import { redirect } from "react-router-dom"
import { deleteData } from "../helpers"

export async function logoutAction(){
    deleteData({ key: "userName" })
    //return redirect
    return redirect("/")
}