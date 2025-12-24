import { motion } from "framer-motion";
  import { Link } from "react-router-dom";
  import { useTranslation } from "@/lib/translations";
  
  export default function ProductHighlight() {
    const { t } = useTranslation();
    
    // 为不同产品类别创建更精美的图片
    const productCategories = [
      {
        titleKey: "productChildren",
        descKey: "productChildrenDesc",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Children%20nutrition%20product%20packaging%20with%20soft%20pastel%20colors%2C%20minimalist%20design%2C%20natural%20light%2C%20high%20quality&sign=50d5ed59bd7fa47784766cd114b1fbd9"
      },
      {
        titleKey: "productAdult",
        descKey: "productAdultDesc",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Adult%20nutrition%20product%20packaging%20with%20elegant%20design%2C%20professional%20look%2C%20natural%20light%2C%20high%20quality&sign=1448b753f8a2d6d55918c2ad772fffe8"
      },
      {
        titleKey: "productAntiaging",
        descKey: "productAntiagingDesc",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Anti-aging%20nutrition%20product%20packaging%20with%20premium%20design%2C%20luxury%20feel%2C%20soft%20lighting%2C%20high%20quality&sign=0385c66b5134975f004378a93dd7aff7"
      }
    ];
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3
        }
      }
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      }
    };
  
    return (
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#faf9f7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              {t("productSystem")}
            </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("productSystemDesc")}
              </p>
          </motion.div>
  
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-500"
              >
                {/* 渐变叠加层，增强视觉效果 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                
                {/* 装饰元素 */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl"></div>
                
                {/* 产品图片 - 优化过渡效果 */}
                <motion.img
                  src={category.image}
                  alt={t(category.titleKey)}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                
                {/* 文本内容 */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <motion.h3 
                    className="text-xl font-medium text-white mb-2"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {t(category.titleKey)}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-200 mb-4"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {t(category.descKey)}
                  </motion.p>
                  
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link 
                      to="/products" 
                      className="inline-flex items-center text-white font-light"
                    >
                      {t("exploreProducts")}
                      <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
  
          <motion.div 
            className="mt-16 text-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link 
              to="/products" 
              className="inline-block px-8 py-3 border border-gray-300 text-gray-800 rounded-full hover:bg-gray-50 transition-colors duration-300"
            >
              {t("allProducts")}
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }