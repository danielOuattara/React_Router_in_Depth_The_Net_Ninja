import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home, About } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        <nav></nav>
      </main>
    </BrowserRouter>
  );
}
