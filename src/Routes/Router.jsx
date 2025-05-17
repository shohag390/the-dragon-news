import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import HomeLayout from "../Layout/HomeLayout";
import DetailsLayout from "../Layout/DetailsLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: App,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    path: "/",
                    Component: HomeLayout
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                },
                {
                    path: "/news/:id",
                    Component: DetailsLayout,
                },
            ]
        }

    ]
)


export default router;