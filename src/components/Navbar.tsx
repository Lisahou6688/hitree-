import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/translations";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "navHome", path: "/" },
    { key: "navBrand", path: "/brand" },
    { key: "navScience", path: "/science" },
    { key: "navProducts", path: "/products" },
    { key: "navTrust", path: "/trust" },
    { key: "navContact", path: "/contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    ><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-light tracking-tight">
              HITREE
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`text-sm font-light hover:text-gray-900 transition-colors duration-200 ${
                  isScrolled ? "text-gray-600" : "text-gray-800"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageSelector />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <span className="sr-only">打开菜单</span>
              <i className={`fa ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-light text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="px-3 py-2">
            <LanguageSelector />
          </div>
        </div>
      </motion.div>
    </nav>
  );
}