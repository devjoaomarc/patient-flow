import { Link, useLocation } from "react-router-dom";

import logo from "@/shared/assets/logo.svg";
import { routes } from "@/shared/constants/routes";
import { useNow } from "@/shared/hooks/use-now";

export default function TopBar() {
  const location = useLocation();

  const now = useNow();

  const today = now.toLocaleDateString("pt-BR");

  const hourNow = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const menuItems = Object.values(routes);

  const currentLocation = menuItems.find(
    (route) => route.path === location.pathname,
  );

  return (
    <div
      className={`
        bg-white
        flex justify-between items-center
        py-2 px-5 rounded-3xl
      `}
    >
      <div className="flex gap-2">
        <img src={logo} alt="Logo" className="h-10" />
        <div className="text-left leading-tight">
          <p className="text-blue-900">Patient Flow</p>
          <p className="text-gray-400 text-sm">{currentLocation?.logoLabel}</p>
        </div>
      </div>

      <nav>
        <ul
          className={`
          flex justify-between gap-5
          text-lg
          `}
        >
          {menuItems.map((menu) => (
            <Link to={menu.path} key={menu.label}>
              <li
                className={`
                  p-3
                  text-gray-400
                  hover:rounded-2xl
                hover:bg-brand/20
                hover:text-brand
              `}
              >
                {menu.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="text-right leading-tight">
        <p className="text-blue-900">{today}</p>
        <p className="text-gray-400">{hourNow}</p>
      </div>
    </div>
  );
}
