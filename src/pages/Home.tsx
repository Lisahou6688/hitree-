import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import ProductHighlight from "@/components/ProductHighlight";
import ScienceBrief from "@/components/ScienceBrief";
import TestimonialSection from "@/components/TestimonialSection";
import { useTranslation } from "@/lib/translations";

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Value Proposition Section */}
      <ValueSection />
      
      {/* Product Highlight */}
      <ProductHighlight />
      
      {/* Science Brief */}
      <ScienceBrief />
      
      {/* Testimonials */}
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              {t("ctaRealHealth")}
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              {t("brandMissionDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/products" 
                className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                {t("exploreProducts")}
              </Link>
              <Link 
                to="/science" 
                className="px-8 py-3 border border-gray-300 text-gray-800 rounded-full hover:bg-gray-50 transition-colors duration-300"
              >
                {t("learnMoreResearch")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}