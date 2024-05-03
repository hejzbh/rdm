import React from "react";
import dynamic from "next/dynamic";
// Components
const Header = dynamic(() => import("@/components/header/Header"));
const Sidebar = dynamic(() => import("@/components/sidebar/Sidebar"));

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/** Header */}
      <Header className="fixed top-0 left-0 w-full h-[4.3rem]" />
      {/** Sidebar & Main */}
      <div className="flex ">
        <Sidebar className="sticky left-0 top-0 h-screen pt-[4.3rem]" />
        <main className="pt-[4.3rem] w-full">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;