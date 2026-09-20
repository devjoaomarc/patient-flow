import { useLocation } from "react-router-dom";

import logo from "@/shared/assets/logo.svg";
import { routes } from "@/shared/constants/routes";

export default function TopbarLogo() {
  const location = useLocation();

  const menuItems = Object.values(routes);

  const currentLocation = menuItems.find(
    (route) => route.path === location.pathname,
  );

  return (
    <div className="flex gap-2">
      <img src={logo} alt="Logo" className="h-10" />

      <div className="text-left leading-tight hidden md:block">
        <p className="text-blue-900">Patient Flow</p>
        <p className="text-gray-400 text-sm">{currentLocation?.logoLabel}</p>
      </div>
    </div>
  );
}
