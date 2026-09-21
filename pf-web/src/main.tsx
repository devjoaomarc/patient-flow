import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./shared/styles/global.css";
import AppRoutes from "./shared/routes";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
