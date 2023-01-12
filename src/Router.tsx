import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { FinishedOrder } from "./pages/FinishedOrder";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/finished-order" element={<FinishedOrder />} />
    </Routes>
  );
}
