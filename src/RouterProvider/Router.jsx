import { createBrowserRouter } from "react-router-dom";
import Main from "../mainLayout/Main";
import Home from "../Pages/Home/home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/register/Register";
import Order from "../Pages/Order/Order";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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
          element:<Order/>,
          loader: ({params})=> fetch(`http://localhost:5000/transformer/${params.id}`)
        }
      ]
    },
  ]);

  export default router;