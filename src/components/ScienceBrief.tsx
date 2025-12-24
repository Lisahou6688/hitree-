import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useTranslation } from "@/lib/translations";

export default function ScienceBrief() {
  const { t } = useTranslation();
  
  // Sample data for the chart
  const researchData = [
    { year: '2018', publications: 12, trials: 5 },
    { year: '2019', publications: 18, trials: 7 },
    { year: '2020', publications: 25, trials: 10 },
    { year: '2021', publications: 32, trials: 14 },
    { year: '2022', publications: 40, trials: 18 },
    { year: '2023', publications: 48, trials: 22 },
    { year: '2024', publications: 56, trials: 28 },
    { year: '2025', publications: 65, trials: 35 }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              {t("ourScience")}
            </h2>
            <p className="text-gray-600 mb-6">
              {t("scienceDesc")}
            </p>
            <p className="text-gray-600 mb-8">
              {t("scienceDesc2")}
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">{t("researchImpact")}</h3>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={researchData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="publications" 
                      stroke="#333" 
                      strokeWidth={2} 
                      dot={{ stroke: '#333', strokeWidth: 2, r: 4 }}
                      activeDot={{ stroke: '#333', strokeWidth: 2, r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="trials" 
                      stroke="#999" 
                      strokeWidth={2} 
                      strokeDasharray="5 5"
                      dot={{ stroke: '#999', strokeWidth: 2, r: 4 }}
                      activeDot={{ stroke: '#999', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="flex justify-center mt-2 space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-800 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">{t("publications")}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">{t("clinicalTrials")}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              to="/science" 
              className="inline-flex items-center text-gray-800 font-medium"
            >
              {t("learnMoreResearch")}
              <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
            </Link>
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
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Scientific%20research%20laboratory%2C%20nutrition%20scientists%2C%20microscope%2C%20test%20tubes%2C%20clean%20white%20environment%2C%20modern%20equipment&sign=fddd7eb82bfdaf6ca2151b2cb5da5426"
                alt="HITREE研发实验室"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-8 -right-4 w-2/3 h-2/3 bg-gray-100 rounded-xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}