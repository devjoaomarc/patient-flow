import { BrowserRouter, Route, Routes } from "react-router-dom";

import CheckInPage from "@/app/checkin";
import ValidatePage from "@/app/validate";

import { routes } from "@/shared/constants/routes";

import Layout from "@/shared/ui/layout";
import PageNotFound from "@/shared/ui/page-not-found";
import DisplayPage from "@/app/display";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.checkIn.path} element={<CheckInPage />} />
          <Route path={routes.validate.path} element={<ValidatePage />} />
          <Route path={routes.display.path} element={<DisplayPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
