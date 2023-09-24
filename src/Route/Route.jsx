import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Pages/Home";
import Favorites from "../components/Pages/Favorites";
import Login from "../components/Pages/Login";
import ErrorPage from "../components/Pages/ErrorPage";
import EachPhoneDetails from "../components/Pages/EachPhoneDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/phones/:id",
        element: <EachPhoneDetails></EachPhoneDetails>,
        loader: () => fetch("/phones.json"),
      },
    ],
  },
]);

export default router;
