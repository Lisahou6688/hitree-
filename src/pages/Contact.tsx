import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "@/lib/translations";

export default function Contact() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 5000);
  };

  const contactInfo = [
  {
    titleKey: "email",
    value: "info@hitree.com",
    icon: "fa-envelope"
  },
  {
    titleKey: "phone",
    value: "+86 10 8888 8888",
    icon: "fa-phone"
  }
];

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
              {t("contactUs")}
            </h1>
            <div className="w-20 h-1 bg-gray-300 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("contactDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#faf9f7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-8">
                {t("contactUs")}
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <i className="fa-solid fa-check-circle text-green-500 text-4xl mb-4"></i>
                  <h3 className="text-xl font-medium mb-2">{t("formSubmitted")}</h3>
                  <p className="text-gray-600">
                    {t("formSubmittedDesc")}
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("yourName")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("yourEmail")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("subject")}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                    >
                      <option value="">{t("selectSubject")}</option>
                      <option value="product">{t("productInquiry")}</option>
                      <option value="research">{t("researchCollaboration")}</option>
                      <option value="partnership">{t("businessPartnership")}</option>
                      <option value="other">{t("other")}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    {t("sendMessage")}
                  </button>
                </form>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-8">
                {t("contactInfo")}
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4 text-gray-700 flex-shrink-0">
                      <i className={`fa-solid ${item.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{t(item.titleKey)}</h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-medium mb-6">{t("businessHours")}</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>周一至周五</span>
                    <span>9:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>周六</span>
                    <span>10:00 - 15:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>周日</span>
                    <span>休息</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-medium mb-6">{t("followUs")}</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors duration-300">
                    <i className="fa-brands fa-weibo"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors duration-300">
                    <i className="fa-brands fa-weixin"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors duration-300">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors duration-300">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
             <h2 className="text-3xl md:text-4xl font-light mb-6">
              {t("contactUs")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg h-[400px] relative"
          >
            {/* This is a placeholder for a map */}
             {/* 添加HITREE标志的办公大楼图片 */}
            <div className="w-full h-full relative">
              <img
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20office%20building%20exterior%2C%20research%20park%2C%20professional%20environment%2C%20minimalist%20architecture&sign=3cde302d471b30108c8c7a8351be28df"
                alt="HITREE办公地点"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                {/* HITREE标志 */}
                <div className="text-6xl font-light text-white/90 tracking-wider">HITREE</div>
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
              {t("connectWithUs")}
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              {t("connectWithUsDesc")}
            </p>
            <a 
              href="#contact-form" 
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              {t("sendMessage")}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}