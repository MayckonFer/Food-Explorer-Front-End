import { Routes, Route } from "react-router-dom";

import { IsAdmin } from "../pages/IsAdmin";
import { Home } from "../pages/Home/Index";
import { Dish } from "../pages/Dish";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IsAdmin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/novo-prato" element={<NewDish />} />
      <Route path="/prato/:id" element={<Dish />} />
      <Route path="/editar-prato/:id" element={<EditDish />} />
    </Routes>
  );
}
