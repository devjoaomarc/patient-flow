import NavOptions from "./nav-options";
import TopbarClock from "./topbar-clock";
import TopbarLogo from "./topbar-logo";

export default function TopBar() {
  return (
    <div
      className={`
        bg-white
        flex justify-between items-center
        py-2 px-5 rounded-2xl
      `}
    >
      <TopbarLogo />

      <NavOptions />

      <TopbarClock />
    </div>
  );
}
