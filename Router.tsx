import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./src/pages/Home";
import { Cart } from "./src/pages/Cart";
import { FinishedOrder } from "./src/pages/FinishedOrder";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/finished-order" element={<FinishedOrder />} />
    </Routes>
  );
}