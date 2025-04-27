import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, HardHat, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    id: 1,
    title: 'Проектування будівель',
    description: 'Розробка архітектурних та конструктивних рішень для житлових, комерційних та промислових об\'єктів.',
    icon: Building2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'Будівництво',
    description: 'Професійне будівництво з використанням якісних матеріалів та сучасних технологій.',
    icon: HardHat,
    color: 'text-terracotta-600',
    bgColor: 'bg-terracotta-100',
  },
  {
    id: 3,
    title: 'Консультації та супровід',
    description: 'Експертна підтримка на всіх етапах, від вибору ділянки до введення в експлуатацію.',
    icon: ClipboardCheck,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
];

const ServiceHighlights: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>Наші послуги</h2>
          <p>
            Ми надаємо повний спектр послуг у сфері проектування та будівництва, 
            гарантуючи високу якість та дотримання строків
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-card hover:shadow-lg hover:-translate-y-2"
            >
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full ${service.bgColor}`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Link 
                  to="/services" 
                  className={`inline-flex items-center text-sm font-medium ${service.color} hover:underline`}
                >
                  Дізнатися більше
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn btn-primary">
            Всі послуги
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;