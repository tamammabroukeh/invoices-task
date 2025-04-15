import { Route, Routes } from "react-router";
import { lazy } from "react";
import SuspenseFallback from "@/components/feedback/SuspenseFallback";
// layouts
const MainLayout = lazy(() => import("@/layouts/Layout"));
// pages
const HomePage = lazy(() => import("@/pages/HomePage"));
const NotFoundPage = lazy(() => import("@/pages/4O4"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SuspenseFallback>
            <MainLayout />
          </SuspenseFallback>
        }
      >
        <Route index element={<HomePage />} />
        {/* if page not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
