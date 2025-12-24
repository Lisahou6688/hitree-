import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";

export default function Footer() {
  const { t } = useTranslation();
  
  const navItems = [
    { key: "navHome", path: "/" },
    { key: "navBrand", path: "/brand" },
    { key: "navScience", path: "/science" },
    { key: "navProducts", path: "/products" },
    { key: "navTrust", path: "/trust" },
    { key: "navContact", path: "/contact" }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-light mb-4">HITREE</div>
            <p className="text-sm text-gray-500 mb-6 max-w-xs">
              {t("brandTagline")} {t("brandSlogan")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">{t("navHome")}</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.key}>
                    <Link to={item.path} className="text-sm text-gray-500 hover:text-gray-900">
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">{t("resources")}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">{t("scientificPapers")}</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">{t("nutritionGuides")}</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">{t("faq")}</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">{t("blog")}</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">{t("legal")}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">{t("privacyPolicy")}</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">{t("termsOfService")}</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">{t("cookiePolicy")}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            {t("copyright", { year: new Date().getFullYear().toString() })}
          </p>
        </div>
      </div>
    </footer>
  );
}