import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import Main from "../Layouts/Main/Main";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/login",
            element: <Home></Home>,
        },
        {
            path: "/register",
            element: <Home></Home>,
        }
        
      ]
    },
  ]);

  export default router