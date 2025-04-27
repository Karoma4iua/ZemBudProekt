import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  'Повний цикл проектування будівель',
  'Індивідуальний підхід до кожного клієнта',
  'Сертифіковані спеціалісти з багаторічним досвідом',
  'Використання сучасних технологій та матеріалів',
];

const CompanyIntro: React.FC = () => {
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
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                alt="Архітектура будівлі"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10 -translate-y-4 -translate-x-4 bg-terracotta-500 rounded-lg"></div>
          </div>

          {/* Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-terracotta-600 bg-terracotta-100 rounded-full"
            >
              З 2001 року на ринку
            </motion.span>
            <motion.h2 variants={itemVariants} className="mb-6 text-3xl font-bold">
              Професійні рішення для вашого будівництва
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-6 text-gray-600">
              ЗемБудПроект — це професійна команда архітекторів, інженерів та будівельників,
              які спеціалізуються на проектуванні та будівництві житлових та комерційних об'єктів.
              Ми пропонуємо повний спектр послуг від початкового концепту до введення будівлі в експлуатацію.
            </motion.p>

            <motion.ul variants={containerVariants} className="mb-8 space-y-3">
              {features.map((feature, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-center">
                  <CheckCircle className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <Link to="/about" className="btn btn-primary">
                Детальніше про нас
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;