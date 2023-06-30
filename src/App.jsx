import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Dashboard, { dashboardLoader } from "./pages/Dashboard"
import ErrorPage from "./pages/ErrorPage"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <ErrorPage/>
  }
])

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
