import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./paginasComum/Home";
import Contato from "./paginasComum/Contato";
import StyleReference from "./paginasComum/StyleReference";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contato />} />
          <Route path="/estilos" element={<StyleReference />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

