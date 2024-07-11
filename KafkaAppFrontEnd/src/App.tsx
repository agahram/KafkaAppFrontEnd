import "./App.css";
import Menu from "./navigation/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
