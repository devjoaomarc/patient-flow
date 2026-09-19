import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckInPage from "../checkin";
import ValidatePage from "../validate";
import Layout from "@/shared/ui/layout";
import PageNotFound from "@/shared/ui/page-not-found";
import { routes } from "@/shared/constants/routes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.checkIn.path} element={<CheckInPage />} />
          {/* <Route path={routes.validate.path} element={<ValidatePage />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
