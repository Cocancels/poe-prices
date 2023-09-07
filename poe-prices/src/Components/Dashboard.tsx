import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navbarLinks } from "../utils/navbarLinks";
import { Navbar } from "./Dashboard/Navbar";
import { Sidebar } from "./Dashboard/Sidebar";

interface DashboardProps {
  children?: React.ReactNode;
}

export const Dashboard = (props: DashboardProps) => {
  const { children } = props;

  return (
    <div className="flex bg-gray-800">
      <Sidebar links={navbarLinks} />
      <div className="flex-1">
        <Navbar />
        <div className="p-4 overflow-y-auto dom-container">{children}</div>
      </div>
    </div>
  );
};
