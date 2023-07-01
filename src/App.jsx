import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Main, { mainLoader } from "./layout/Main";
import { logoutAction } from "./actions/logout";

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
    </div>
  );
}

export default App;
