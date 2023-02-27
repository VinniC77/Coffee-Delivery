import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompletedOrderPage } from "./pages/CompletedOrder";
import { HomePage } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completedOrder" element={<CompletedOrderPage />} />
      </Route>
    </Routes>
  );
}
