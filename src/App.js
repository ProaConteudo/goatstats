import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Curadoria from "./pages/Curadoria";
import Tendencias from "./pages/Tendencias";
import CriarArte from "./pages/CriarArte";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100 text-gray-900">
        <aside className="w-64 bg-yellow-400 text-black p-4 hidden md:block">
          <nav className="space-y-4">
            <Link to="/" className="block font-bold">GOAT Stats</Link>
            <Link to="/curadoria" className="block">🧠 Curadoria</Link>
            <Link to="/tendencias" className="block">🔥 Tendências</Link>
            <Link to="/criar-arte" className="block">🎨 Criar Arte</Link>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<h1 className="text-2xl font-bold">Dashboard</h1>} />
            <Route path="/curadoria" element={<Curadoria />} />
            <Route path="/tendencias" element={<Tendencias />} />
            <Route path="/criar-arte" element={<CriarArte />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
