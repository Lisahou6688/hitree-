import { motion } from "framer-motion";
  import { useState } from "react";
  import { useTranslation } from "@/lib/translations";
  
  export default function Products() {
    const [activeCategory, setActiveCategory] = useState("all");
    const { t } = useTranslation();
  
    const productCategories = [
      { id: "all", name: t("allProducts") },
      { id: "children", name: t("productChildren") },
      { id: "adult", name: t("productAdult") },
      { id: "antiaging", name: t("productAntiaging") }
    ];
  
    // 为不同产品类别生成更具辨识度的图片
    const getProductImage = (category: string, productName: string) => {
      // 为每种产品类型定义独特的图片
      const imagePrompts: Record<string, string> = {
        "氨基丁酸": "Supplement bottle packaging for calcium and GABA, minimalist white design, soft shadows, natural light, high quality",
        "叶黄素": "Supplement bottle packaging for lutein eye health, minimalist white design with blue accents, soft shadows, natural light, high quality",
        "麦角硫因": "Premium supplement bottle packaging for anti-aging, minimalist dark gold accents on white, pharmaceutical grade design, high quality",
        "液体铁": "Liquid supplement bottle for iron with plum flavor, minimalist pink accents on white, elegant design, high quality",
        "护肝": "Supplement bottle for liver health, minimalist green accents on white, clean pharmaceutical design, high quality"
      };
      
      // 确定产品类型
      let productType = "general";
      for (const [key, prompt] of Object.entries(imagePrompts)) {
        if (productName.includes(key)) {
          productType = key;
          break;
        }
      }
      
      // 根据产品类型选择图片
      switch(productType) {
        case "氨基丁酸":
          return "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Supplement%20bottle%20packaging%20for%20calcium%20and%20GABA%2C%20minimalist%20white%20design%2C%20soft%20shadows%2C%20natural%20light%2C%20high%20quality&sign=a59e686edf8312c25fc2a551ea0ef608";
        case "叶黄素":
          return "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Supplement%20bottle%20packaging%20for%20lutein%20eye%20health%2C%20minimalist%20white%20design%20with%20blue%20accents%2C%20soft%20shadows%2C%20natural%20light%2C%20high%20quality&sign=90c234bcbc6ecef6eb575e8d638c67b7";
        case "麦角硫因":
          return "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Premium%20supplement%20bottle%20packaging%20for%20anti-aging%2C%20minimalist%20dark%20gold%20accents%20on%20white%2C%20pharmaceutical%20grade%20design%2C%20high%20quality&sign=a9f330bc3b91d7f7e79f34d1efb1ed7b";
        case "液体铁":
          return "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Liquid%20supplement%20bottle%20for%20iron%20with%20plum%20flavor%2C%20minimalist%20pink%20accents%20on%20white%2C%20elegant%20design%2C%20high%20quality&sign=9e3e486b59e10210094db922d915486d";
        case "护肝":
          return "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Supplement%20bottle%20for%20liver%20health%2C%20minimalist%20green%20accents%20on%20white%2C%20clean%20pharmaceutical%20design%2C%20high%20quality&sign=bf753c1257e9712b43c9e2ec05d6d4d0";
        default:
          return "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Premium%20supplement%20product%20packaging%2C%20minimalist%20design%2C%20white%20background%2C%20natural%20lighting&sign=1d42b7232e49b7fb062986e931d346d0";
      }
    };
  
    const products = [
      {
        id: 1,
        name: "Hitree氨基丁酸液体钙",
        specification: "7袋/盒",
        dosageForm: "液体 / 香橙味",
        price: 29,
        category: "children",
        description: "钙+K2+D3+GABA，助力骨骼成长与长高",
        targetAudience: "4–18 岁儿童及青少年",
      },
      {
        id: 2,
        name: "Hitree氨基丁酸液体钙",
        specification: "30袋/盒",
        dosageForm: "液体 / 香橙味",
        price: 199,
        category: "children",
        description: "钙+K2+D3+GABA，助力骨骼成长与长高",
        targetAudience: "4–18 岁儿童及青少年",
      },
      {
        id: 3,
        name: "Hitree儿童叶黄素软糖",
        specification: "6粒/盒",
        dosageForm: "软糖 / 混合莓果",
        price: 9.9,
        category: "children",
        description: "叶黄素 + 玉米黄质 + meso 玉米黄质，科学护眼",
        targetAudience: "3–18 岁儿童青少年 & 成人",
      },
      {
        id: 4,
        name: "Hitree儿童叶黄素软糖",
        specification: "30粒/盒",
        dosageForm: "软糖 / 混合莓果",
        price: 69,
        category: "children",
        description: "叶黄素 + 玉米黄质 + meso 玉米黄质，科学护眼",
        targetAudience: "3–18 岁儿童青少年 & 成人",
      },
      {
        id: 5,
        name: "Hitree儿童叶黄素软糖",
        specification: "60粒/盒",
        dosageForm: "软糖 / 混合莓果",
        price: 129,
        category: "children",
        description: "叶黄素 + 玉米黄质 + meso 玉米黄质，科学护眼",
        targetAudience: "3–18 岁儿童青少年 & 成人",
      },
      {
        id: 6,
        name: "Hitree麦角硫因硬胶囊",
        specification: "60粒/瓶",
        dosageForm: "硬胶囊",
        price: 399,
        category: "antiaging",
        description: "麦角硫因 + PQQ + VC，细胞级抗氧化",
        targetAudience: "熬夜人群、压力大、抗衰保养",
      },
      {
        id: 7,
        name: "Hitree液体铁试用装",
        specification: "10ml×4条",
        dosageForm: "液体 / 西梅汁",
        price: 19.9,
        category: "adult",
        description: "液体铁好吸收，改善气血状态",
        targetAudience: "女性经期、孕期、产后、易疲劳人群",
      },
      {
        id: 8,
        name: "Hitree液体铁正装",
        specification: "10ml×20条",
        dosageForm: "液体 / 西梅汁",
        price: 219,
        category: "adult",
        description: "液体铁好吸收，改善气血状态",
        targetAudience: "女性经期、孕期、产后、易疲劳人群",
      },
      {
        id: 9,
        name: "Hitree护肝软胶囊",
        specification: "15粒/盒",
        dosageForm: "软胶囊",
        price: 29.9,
        category: "adult",
        description: "奶蓟草 + 姜黄素 + α-硫辛酸，护肝修复",
        targetAudience: "熬夜、应酬、代谢差、肤色暗沉",
      },
      {
        id: 10,
        name: "Hitree护肝软胶囊",
        specification: "60粒/盒",
        dosageForm: "软胶囊",
        price: 289,
        category: "adult",
        description: "奶蓟草 + 姜黄素 + α-硫辛酸，护肝修复",
        targetAudience: "熬夜、应酬、代谢差、肤色暗沉",
      }
    ];
  
    const filteredProducts = activeCategory === "all" 
      ? products 
      : products.filter(product => product.category === activeCategory);
  
    return (
      <div className="min-h-screen bg-white pt-28 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                {t("productSystem")}
              </h1>
              <div className="w-20 h-1 bg-gray-300 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("productSystemDesc")}
              </p>
            </motion.div>
          </div>
        </section>
  
        {/* Product Categories */}
        <section className="py-10 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
  
        {/* Product Grid */}
        <section className="py-10 px-6 md:px-12 lg:px-24 bg-[#faf9f7]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => (
                 <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  {/* 改进的产品图片容器 - 添加更精美的视觉效果 */}
                  <div className="h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 relative">
                    {/* 装饰元素 */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/50 rounded-full blur-md"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/30 rounded-full blur-md"></div>
                    
                    {/* 产品图片 - 添加优雅的悬停效果 */}
                    <motion.img
                      src={getProductImage(product.category, product.name)}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain z-10 transition-all duration-700"
                      whileHover={{ scale: 1.08, rotate: -1 }}
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium group-hover:text-gray-900 transition-colors">{product.name}</h3>
                      <span className="text-lg font-semibold text-gray-900">¥{product.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{product.specification} · {product.dosageForm}</p>
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <i className="fa-solid fa-user-group mr-1"></i>
                      <span>{product.targetAudience}</span>
                    </div>
                    <button className="w-full py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition-all duration-300 flex justify-center items-center group">
                      {t("learnMore")}
                      <motion.i 
                        className="fa-solid fa-arrow-right ml-2 text-sm"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      ></motion.i>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
  
        {/* How It Works */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                {t("productRationale")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("productRationaleDesc")}
              </p>
            </motion.div>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                {
                  title: t("valueEvidence"),
                  description: t("valueEvidenceDesc"),
                  icon: "fa-flask"
                },
                {
                  title: t("valuePrecision"),
                  description: t("valuePrecisionDesc"),
                  icon: "fa-balance-scale"
                },
                {
                  title: t("valueLongTerm"),
                  description: t("valueLongTermDesc"),
                  icon: "fa-heartbeat"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-gray-700">
                    <i className={`fa-solid ${item.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
                </motion.div>
              ))}
              </div>
            </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#faf9f7]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                {t("supplementAccurately")}
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                {t("supplementAccuratelyDesc")}
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                {t("contactAdvisor")}
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }