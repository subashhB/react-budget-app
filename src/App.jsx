import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Main, { mainLoader } from "./layout/Main";
import { logoutAction } from "./actions/logout";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "logout",
        action: logoutAction,
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
}

export default App;
