import React from "react";
import { ExpenseProvider } from "../context/ExpenseContext";
// import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../components/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";

const Index = () => {
  return (
    <ExpenseProvider>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </ExpenseProvider>
  );
};

export default Index;
