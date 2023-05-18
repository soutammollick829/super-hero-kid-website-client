import { createBrowserRouter } from "react-router-dom";
import Main from "../mainLayout/Main";
import Home from "../Pages/Home/home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
  ]);

  export default router;