import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";


  const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
          {
            path:'*',
            element:<ErrorPage></ErrorPage>
          }
        ]
            
    }
  ]);

  export default router;