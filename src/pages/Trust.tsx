import { motion } from "framer-motion";
  import { useTranslation } from "@/lib/translations";
  
  export default function Trust() {
    const { t } = useTranslation();
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
                {t("ourTrustPhilosophy")}
              </h1>
              <div className="w-20 h-1 bg-gray-300 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("ourTrustPhilosophyDesc")}
              </p>
            </motion.div>
          </div>
        </section>
  
        {/* Quality Standards */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#faf9f7]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                {t("rigorousQualityStandards")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("rigorousQualityStandardsDesc")}
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: t("ingredientTraceability"),
                  description: t("ingredientTraceabilityDesc"),
                  icon: "fa-leaf"
                },
                {
                  title: t("gmpManufacturing"),
                  description: t("gmpManufacturingDesc"),
                  icon: "fa-industry"
                },
                {
                  title: t("thirdPartyTesting"),
                  description: t("thirdPartyTestingDesc"),
                  icon: "fa-flask"
                },
                {
                  title: t("fullTransparency"),
                  description: t("fullTransparencyDesc"),
                  icon: "fa-search-location"
                }
              ].map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-gray-700">
                    <i className={`fa-solid ${standard.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-medium mb-4">{standard.title}</h3>
                  <p className="text-gray-600">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Transparency */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  {t("fullTransparency")}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t("fullTransparencyDesc")}
                </p>
                <p className="text-gray-600 mb-8">
                  {t("fullTransparencyDesc")}
                </p>
                
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>{t("clearIngredientSourcesDesc")}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>{t("preciseDosageLabelingDesc")}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>{t("clearEfficacyBoundariesDesc")}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>{t("clearIngredientSourcesDesc")}</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Quality%20control%20laboratory%2C%20scientist%20testing%20supplements%2C%20clean%20environment%2C%20precision%20equipment%2C%20white%20background&sign=753516f7d3542cc153798dc33001d6d0"
                    alt="HITREE质量控制实验室"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-8 -left-4 w-2/3 h-2/3 bg-gray-100 rounded-xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Compliance */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#faf9f7]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                {t("strictCompliance")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("strictComplianceDesc")}
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t("fdaCompliance"),
                  description: t("fdaComplianceDesc"),
                  image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=FDA%20compliance%20certification%20badge%2C%20regulatory%20standards%2C%20official%20seal%2C%20white%20background&sign=3d22a36481f69dd6e425612786680693"
                },
                {
                  title: t("gmpCertification"),
                  description: t("gmpCertificationDesc"),
                  image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=GMP%20certification%20badge%2C%20good%20manufacturing%20practices%2C%20quality%20seal%2C%20white%20background&sign=0aedca5acc3d55bbac6fcf1d0cdb4289"
                },
                {
                  title: t("isoStandards"),
                  description: t("isoStandardsDesc"),
                  image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=ISO%20certification%20badge%2C%20international%20standards%2C%20quality%20seal%2C%20white%20background&sign=9538cc7f7406a7376a4c8468617b7130"
                }
              ].map((certification, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-48 flex items-center justify-center p-8">
                    <img
                      src={certification.image}
                      alt={certification.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3">{certification.title}</h3>
                    <p className="text-gray-600">{certification.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Customer Trust */}
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
                {t("yourTrustOurPriority")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("yourTrustOurPriorityDesc")}
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t("clearIngredientSources"),
                  description: t("clearIngredientSourcesDesc"),
                  icon: "fa-search-location"
                },
                {
                  title: t("preciseDosageLabeling"),
                  description: t("preciseDosageLabelingDesc"),
                  icon: "fa-weight-hanging"
                },
                {
                  title: t("clearEfficacyBoundaries"),
                  description: t("clearEfficacyBoundariesDesc"),
                  icon: "fa-balance-scale"
                }
              ].map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-gray-700">
                    <i className={`fa-solid ${commitment.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-medium mb-4">{commitment.title}</h3>
                  <p className="text-gray-600">{commitment.description}</p>
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
                {t("experienceHitreeDifference")}
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                {t("experienceHitreeDifferenceDesc")}
              </p>
              <a 
                href="/products" 
                className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                {t("exploreProducts")}
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }