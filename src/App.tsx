import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Brand from "@/pages/Brand";
import Science from "@/pages/Science";
import Products from "@/pages/Products";
import Trust from "@/pages/Trust";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/science" element={<Science />} />
        <Route path="/products" element={<Products />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
