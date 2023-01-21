import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CartPage from "./pages/CartPage";

import CoursesPage from "./pages/CoursesPage";
import DetialCoursePage from "./pages/DetialCoursePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:id" element={<DetialCoursePage />} />
        <Route path="/category/:category" element={<CoursesPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
