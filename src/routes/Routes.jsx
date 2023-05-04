import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import LoginLayout from "../layouts/LoginLayout";
import RegistrationLayout from "../layouts/RegistrationLayout";
import ChefDetails from "../pages/Home/Chefs/ChefCards/ChefDetails/ChefDetails/ChefDetails";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch('https://culine-food-recipe-server.vercel.app/chefs')
      },
      {
        path: '/chef/:id',
        element: <ChefDetails></ChefDetails>,
        loader: () => fetch('https://culine-food-recipe-server.vercel.app/chefs')
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]

  },
  {
    path: '/login',
    element: <LoginLayout></LoginLayout>
  },
  {
    path: '/registration',
    element: <RegistrationLayout></RegistrationLayout>
  }
]);

export default router;