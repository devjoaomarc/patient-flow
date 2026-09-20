import { routes } from "@/shared/constants/routes";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function NavOptions() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = Object.values(routes);

  return (
    <>
      <nav
        className={`
          hidden md:flex justify-between gap-5
          text-lg
          `}
      >
        {menuItems.map((menu) => (
          <NavLink
            to={menu.path}
            key={menu.label}
            className={({ isActive }) =>
              `
                p-3 rounded-2xl
                hover:bg-brand/20 hover:text-brand
                ${isActive ? "bg-brand/10 text-brand/70" : "text-gray-400"}
              `
            }
          >
            {menu.label}
          </NavLink>
        ))}
      </nav>

      <select
        className="md:hidden rounded-md border border-gray-300 bg-white px-3 py-2"
        value={location.pathname}
        onChange={(event) => navigate(event.target.value)}
      >
        {menuItems.map((menu) => (
          <option key={menu.label} value={menu.path}>
            {menu.label}
          </option>
        ))}
      </select>
    </>
  );
}
