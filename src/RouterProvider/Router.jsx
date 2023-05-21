import { createBrowserRouter } from "react-router-dom";
import Main from "../mainLayout/Main";
import Home from "../Pages/Home/home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/register/Register";
import Order from "../Pages/Order/Order";
import ErrorPage from "../Pages/Error/ErrorPage";
import ViewDetails from "../Pages/ToyViewDetailes/ViewDetails";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddToy from "../Pages/Add a toy/AddToy";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/order/:id',
          element:<PrivateRoute><Order/></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/transformer/${params.id}`)
        },
        {
          path:'/view/:id',
          element:<PrivateRoute><ViewDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path:'/orders',
          element:<MyToys/>
        },
        {
          path:'/addToy',
          element:<AddToy/>
        },
        {
          path:'*',
          element:<ErrorPage/>
        }
      ]
    },
  ]);

  export default router;