import { motion } from "framer-motion";
import { useTranslation } from "@/lib/translations";

export default function Brand() {
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
              {t("brandStory")}
            </h1>
            <div className="w-20 h-1 bg-gray-300 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("brandStoryDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#faf9f7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-6">
                {t("brandMission")}
              </h2>
              <p className="text-gray-600 mb-6">
                {t("brandMissionDesc")}
              </p>
              <p className="text-gray-600">
                {t("brandMissionDesc2")}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-6">
                {t("brandVision")}
              </h2>
              <p className="text-gray-600 mb-6">
                {t("brandVisionDesc")}
              </p>
              <p className="text-gray-600">
                {t("brandVisionDesc2")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
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
              {t("brandPhilosophy")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("brandPhilosophyDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: t("valueEvidence"),
                description: t("valueEvidenceDesc"),
                icon: "fa-microscope"
              },
              {
                title: t("valuePrecision"),
                description: t("valuePrecisionDesc"),
                icon: "fa-dna"
              },
              {
                title: t("valueLongTerm"),
                description: t("valueLongTermDesc"),
                icon: "fa-calendar-alt"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-gray-700">
                  <i className={`fa-solid ${principle.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-medium mb-4">{principle.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Personality */}
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
                {t("brandPersonality")}
              </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-medium mb-6">{t("brandCharacter")}</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-gray-800 mt-1 mr-3"></i>
                  <span>{t("brandCharacter1")}</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-gray-800 mt-1 mr-3"></i>
                  <span>{t("brandCharacter2")}</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-gray-800 mt-1 mr-3"></i>
                  <span>{t("brandCharacter3")}</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-medium mb-6">{t("brandExpression")}</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-gray-800 mt-1 mr-3"></i>
                  <span>{t("brandExpression1")}</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-gray-800 mt-1 mr-3"></i>
                  <span>{t("brandExpression2")}</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-gray-800 mt-1 mr-3"></i>
                  <span>{t("brandExpression3")}</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-gray-800 mt-1 mr-3"></i>
                  <span>{t("brandExpression4")}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
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
              {t("targetAudience")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto"
          >
            <p className="text-gray-600 mb-8 text-center">
              {t("targetAudienceDesc")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-100 p-6 rounded-lg hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-700">
                  <i className="fa-solid fa-brain text-xl"></i>
                </div>
                <h3 className="text-lg font-medium mb-2">{t("targetAudience1")}</h3>
                <p className="text-gray-600">{t("targetAudience1Desc")}</p>
              </div>
              
              <div className="border border-gray-100 p-6 rounded-lg hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-700">
                  <i className="fa-solid fa-flask text-xl"></i>
                </div>
                <h3 className="text-lg font-medium mb-2">{t("targetAudience2")}</h3>
                <p className="text-gray-600">{t("targetAudience2Desc")}</p>
              </div>
              
              <div className="border border-gray-100 p-6 rounded-lg hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-700">
                  <i className="fa-solid fa-hand-holding-usd text-xl"></i>
                </div>
                <h3 className="text-lg font-medium mb-2">{t("targetAudience3")}</h3>
                <p className="text-gray-600">{t("targetAudience3Desc")}</p>
              </div>
              
              <div className="border border-gray-100 p-6 rounded-lg hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-700">
                  <i className="fa-solid fa-user-check text-xl"></i>
                </div>
                <h3 className="text-lg font-medium mb-2">{t("targetAudience4")}</h3>
                <p className="text-gray-600">{t("targetAudience4Desc")}</p>
              </div>
            </div>
          </motion.div>
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
              {t("ctaRealHealth")}
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              {t("ctaRealHealthDesc")}
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