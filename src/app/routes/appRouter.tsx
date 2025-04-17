import { RegistrationPage } from "pages/registrationPage";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";

export const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            Component: RegistrationPage
        },
    ])

    return <RouterProvider router={router}/>
};
