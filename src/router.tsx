import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Portal from "./views/auth/Portal";
import Turnos from "./views/home/Turnos";
import Home from "./views/home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} index />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/turnos" element={<Turnos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
