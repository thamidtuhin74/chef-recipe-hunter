import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CardDetails from "../Components/CardDetails/CardDetails";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../Pages/PageNotFound";

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
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/card-details/:chefID",
            element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
            loader: ({params})=> fetch(`https://chef-recipe-hunter-server-thamidtuhin74.vercel.app/chefs/${params.chefID}`)

        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/*",
            element: <PageNotFound></PageNotFound>
        },
        
      ]
    },
  ]);

  export default router