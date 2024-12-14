import { createBrowserRouter } from "react-router-dom";

import {
  RedirectAuthenticatedUsers,
  RedirectUnauthenticatedUsers,
} from "@/components/auth-routes";
import Home from "@/pages/Home";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import DashboardPage from "@/pages/Dashboard";
import DashboardLayout from "@/pages/Dashboard/dashboard-layout";
import CreateGroupPage from "@/pages/groups/create-group";

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
  {
    element: <RedirectUnauthenticatedUsers />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/groups",
            children: [
              {
                path: "create",
                element: <CreateGroupPage />,
              },
              {
                path: "find",
                element: <>find group page</>,
              },
              {
                path: ":groupId",
                element: <>groupid test</>,
              },
            ],
          },
          {
            path: "/features",
            element: <>features page</>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <>not found page</>,
  },
]);
