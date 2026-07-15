"use client";

import React, { useState } from "react";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import NewSidebar from "@/components/dashboard/new-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth >= 1024) {
      setIsDesktopSidebarOpen((prev) => !prev);
    } else {
      setIsMobileSidebarOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex min-h-screen">
      {isMobileSidebarOpen && (
        <div
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <NewSidebar
        isDesktopSidebarOpen={isDesktopSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        closeMobileSidebar={() => setIsMobileSidebarOpen(false)}
      />

      <div className="flex-1">
        <DashboardHeader
          isDesktopSidebarOpen={isDesktopSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {children}
      </div>
    </div>
  );
};

export default Layout;