import React, { useContext, useState } from "react";
import { UserContext } from "../../context/useContext";

import SideMenu from "./SideMenu";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  const { user } = useContext(UserContext);
  const [activeMenu, setActiveMenu] = useState("");
  return (
    <div className="">
      <Navbar activeMenu={activeMenu} />
      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>
          <div className="grow max-5"> {children} </div>
        </div>
      )}
    </div>
  );
}

export default DashboardLayout;
