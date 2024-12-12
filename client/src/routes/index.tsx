import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  //   {
  //     path: "/login",
  //     element: <LoginPage />,
  //   },
  //   {
  //     path: "/signup",
  //     element: <SignUpPage />,
  //   },
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
