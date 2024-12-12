import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import { RedirectAuthenticatedUsers } from "@/components/auth-routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <RedirectAuthenticatedUsers />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },

  //   {
  //     element: <PrivateRoute />,
  //     children: [
  //       {
  //         path: "/dashboard",
  //         element: <DashboardPage />,
  //       },
  //       {
  //         path: "/new-group",
  //         element: <NewGroup />,
  //       },
  //       {
  //         path: "/groups/:groupId",
  //         element: <GroupDetailsPage />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
]);
