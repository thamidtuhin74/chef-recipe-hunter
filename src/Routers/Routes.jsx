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
            loader: ()=> fetch('https://chef-recipe-hunter-server-thamidtuhin74.vercel.app/chefs')
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