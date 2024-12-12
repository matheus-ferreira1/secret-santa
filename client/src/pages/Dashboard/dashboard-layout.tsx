import { Outlet } from "react-router-dom";

import DashboardHeader from "./_components/dashboard-header";

const DashboardLayout = () => {
  return (
    <>
      <DashboardHeader />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
