import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { FormPage } from "./pages/FormPage"
import { ResultPage } from "./pages/ResultPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormPage />
  },
  {
    path: "/result",
    element: <ResultPage />
  }
])

export function Router(){
    return(
        <RouterProvider router={router}/>
    )
}