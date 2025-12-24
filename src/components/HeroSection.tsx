import { motion } from "framer-motion";
import { useTranslation } from "@/lib/translations";

export default function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-white/0"></div>
        <img
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Minimal%20laboratory%20with%20scientific%20equipment%2C%20clean%20white%20surfaces%2C%20natural%20lighting%2C%20medical%20nutrition%20research&sign=d17afbeb3859b0abd7c691ecb376f187"
          alt="HITREE实验室"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              <span className="block">HITREE</span>
              <span className="block font-normal">{t("brandTagline")}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              {t("brandSlogan")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#learn-more" 
                className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                {t("learnMore")}
              </a>
              <a 
                href="/products" 
                className="px-8 py-3 border border-gray-300 text-gray-800 rounded-full hover:bg-gray-50 transition-colors duration-300"
              >
                {t("exploreProducts")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#learn-more" className="text-gray-600 hover:text-gray-900">
          <i className="fa-solid fa-chevron-down"></i>
        </a>
      </motion.div>
    </section>
  );
}