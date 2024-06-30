import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, PageNotFound, Repository } from "./pages";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repository/:repositorio" element={<Repository />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}