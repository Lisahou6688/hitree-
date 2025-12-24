import { motion } from "framer-motion";
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
  import { useTranslation } from "@/lib/translations";
  
  export default function Science() {
    const { t } = useTranslation();
    // Sample data for charts
    const researchGrowthData = [
      { year: '2018', studies: 8, publications: 12 },
      { year: '2019', studies: 12, publications: 18 },
      { year: '2020', studies: 18, publications: 25 },
      { year: '2021', studies: 24, publications: 32 },
      { year: '2022', studies: 30, publications: 40 },
      { year: '2023', studies: 38, publications: 48 },
      { year: '2024', studies: 46, publications: 56 },
      { year: '2025', studies: 55, publications: 65 }
    ];
  
    const efficacyData = [
      { name: t("cognitiveFunction"), baseline: 30, improved: 75 },
      { name: t("immuneSystem"), baseline: 40, improved: 82 },
      { name: t("energyLevels"), baseline: 35, improved: 78 },
      { name: t("recoveryAbility"), baseline: 25, improved: 70 },
    ];
  
    const ingredientSourcingData = [
      { name: t("organicIngredients"), value: 40 },
      { name: t("nonGMO"), value: 35 },
      { name: t("sustainableSourcing"), value: 25 }
    ];
  
    const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];
  
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
                {t("scienceBehindProducts")}
              </h1>
              <div className="w-20 h-1 bg-gray-300 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("scienceDescPage")}
              </p>
            </motion.div>
          </div>
        </section>
  
        {/* Our Research Approach */}
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
                {t("ourResearchApproach")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("ourResearchApproachDesc")}
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t("literatureResearch"),
                  description: t("literatureResearchDesc"),
                  step: "01"
                },
                {
                  title: t("formulaDevelopment"),
                  description: t("formulaDevelopmentDesc"),
                  step: "02"
                },
                {
                  title: t("clinicalTrials2"),
                  description: t("clinicalTrials2Desc"),
                  step: "03"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative bg-white p-8 rounded-xl shadow-sm"
                >
                  <div className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 text-2xl font-light">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-medium mb-4 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Research Impact */}
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
                {t("researchGrowth")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("researchGrowthDesc")}
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-medium mb-6">{t("researchGrowth")}</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={researchGrowthData} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="studies" 
                      stroke="#333" 
                      strokeWidth={2} 
                      dot={{ stroke: '#333', strokeWidth: 2, r: 4 }}
                      activeDot={{ stroke: '#333', strokeWidth: 2, r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="publications" 
                      stroke="#999" 
                      strokeWidth={2} 
                      strokeDasharray="5 5"
                      dot={{ stroke: '#999', strokeWidth: 2, r: 4 }}
                      activeDot={{ stroke: '#999', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="flex justify-center mt-4 space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-800 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">{t("clinicalTrials")}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">{t("publications")}</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-medium mb-6">{t("clinicalEfficacy")}</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={efficacyData} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Bar dataKey="baseline" name={t("baseline")} fill="#d1d1d1" />
                    <Bar dataKey="improved" name={t("afterUse")} fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-2 text-xs text-gray-500">
                  {t("participantImprovementPercentage")}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Ingredient Science */}
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
                {t("ingredientScience")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("ingredientScienceDesc")}
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-medium mb-4">{t("qualityStandards")}</h3>
                  <p className="text-gray-600 mb-4">
                    {t("qualityStandardsDesc")}
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                      <span>{t("contaminantTesting")}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                      <span>{t("identityVerification")}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                      <span>{t("potencyTesting")}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                      <span>{t("stabilityTesting")}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-medium mb-6 text-center">{t("ingredientSourcing")}</h3>
                  <div className="flex justify-center">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={ingredientSourcingData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {ingredientSourcingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Research Publications */}
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
                {t("featuredPublications")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("featuredPublicationsDesc")}
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "精准营养素组合在支持认知功能方面的功效",
                  authors: "李静，金荣，威尔逊E等",
                  journal: "营养科学杂志",
                  year: "2025",
                  volume: "14",
                  pages: "1-12"
                },
                {
                  title: "微量营养素补充对免疫系统支持的随机对照试验",
                  authors: "张达，陈思，罗德里格斯M等",
                  journal: "营养研究",
                  year: "2024",
                  volume: "42",
                  pages: "56-67"
                },
                {
                  title: "新型抗氧化剂配方在健康成人中的生物利用度",
                  authors: "威尔逊E，李静，金荣等",
                  journal: "营养素",
                  year: "2024",
                  volume: "16",
                  pages: "1234-1245"
                },
                {
                  title: "靶向营养对代谢健康标志物的长期影响",
                  authors: "金荣，张达，罗德里格斯M等",
                  journal: "美国临床营养杂志",
                  year: "2023",
                  volume: "118",
                  pages: "789-801"
                }
              ].map((publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-lg font-medium mb-3">{publication.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{publication.authors}</p>
                  <p className="text-sm text-gray-600 mb-1">
                    <em>{publication.journal}</em> {publication.year}; {publication.volume}:{publication.pages}
                  </p><button className="mt-4 text-sm text-gray-800 font-medium flex items-center hover:text-gray-600 transition-colors">
                    {t("viewAbstract")}
                    <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                  </button>
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
                {t("experienceScientificNutrition")}
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                {t("experienceScientificNutritionDesc")}
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