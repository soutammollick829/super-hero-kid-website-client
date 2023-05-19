import { createBrowserRouter } from "react-router-dom";
import Main from "../mainLayout/Main";
import Home from "../Pages/Home/home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/register/Register";


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
        }
      ]
    },
  ]);

  export default router;