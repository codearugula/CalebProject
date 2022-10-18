import "./App.css";
import Employees from "./pages/employees";
import Customers from "./pages/customers";
import Dictionary from "./pages/dictionary";
import Calendar from "./pages/calendar";
import NavBar from "./components/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
      </NavBar>{" "}
    </BrowserRouter>
  );
}
