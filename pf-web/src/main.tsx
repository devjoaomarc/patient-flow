import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./shared/styles/global.css";

import AppRoutes from "./app/routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
