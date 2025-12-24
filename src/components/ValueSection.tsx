import { motion } from "framer-motion";
import { useTranslation } from "@/lib/translations";

export default function ValueSection() {
  const { t } = useTranslation();
  
  const values = [
    {
      titleKey: "valueEvidence",
      descKey: "valueEvidenceDesc",
      icon: "fa-flask"
    },
    {
      titleKey: "valuePrecision",
      descKey: "valuePrecisionDesc",
      icon: "fa-balance-scale"
    },
    {
      titleKey: "valueLongTerm",
      descKey: "valueLongTermDesc",
      icon: "fa-heartbeat"
    },
    {
      titleKey: "valueTransparency",
      descKey: "valueTransparencyDesc",
      icon: "fa-shield-alt"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="learn-more" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            {t("coreValues")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("brandPhilosophyDesc")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-gray-700">
                <i className={`fa-solid ${value.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-medium mb-4">{t(value.titleKey)}</h3>
              <p className="text-gray-600">{t(value.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}