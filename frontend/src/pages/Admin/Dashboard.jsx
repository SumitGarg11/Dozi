import React, { useContext } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import { UserContext } from "../../context/useContext";
import DashboardLayout from "../../components/layouts/DashboardLayout";

function Dashboard() {
  useUserAuth();
  const { user } = useContext(UserContext);
  return <DashboardLayout>Dashboard</DashboardLayout>;
}

export default Dashboard;
