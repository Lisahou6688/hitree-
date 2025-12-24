import { motion } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "HITREE's approach to nutrition has transformed my understanding of what it means to truly nourish the body. Their scientific backing gives me confidence in every product.",
      author: "Dr. Sarah Chen",
      role: "Nutrition Researcher"
    },
    {
      quote: "As a physician, I appreciate HITREE's commitment to evidence-based formulations. I recommend their products to patients who are serious about long-term health.",
      author: "Dr. Michael Rodriguez",
      role: "Preventive Medicine Specialist"
    },
    {
      quote: "What sets HITREE apart is their transparency. I can trust that every ingredient has been carefully selected and rigorously tested for safety and efficacy.",
      author: "Emma Thompson",
      role: "Health & Wellness Coach"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
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
            Trusted by <span className="font-normal">Health Experts</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from professionals who rely on HITREE's evidence-based approach to nutrition.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-5xl text-gray-200 mb-6">"</div>
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div>
                <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}