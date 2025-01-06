import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import SideBar from "../Components/ui/SideBar";

export default function Layout() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  //   useEffect(() => {
  //     const accessToken = Cookies.get("accessToken");
  //     const refreshToken = Cookies.get("refreshToken");

  //     if (!accessToken || !refreshToken) {
  //       navigate("/");
  //     }
  //   }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <SideBar open={open} setOpen={setOpen} />

      <div
        className={`flex flex-col w-full min-h-screen transition-all duration-300 ${
          open ? "pl-60" : "pl-20"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
