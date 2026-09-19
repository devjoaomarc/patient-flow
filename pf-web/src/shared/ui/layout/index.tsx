import { Outlet } from "react-router-dom";
import TopBar from "../topbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-brand/10 p-10">
      <div className="mx-auto max-w-7xl">
        <header>
          <TopBar />
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
