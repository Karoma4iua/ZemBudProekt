import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Проектуємо та будуємо ваші мрії з 2001 року
          </h1>
          <p className="mb-8 text-xl text-gray-200">
            Надійна будівельна компанія з багаторічним досвідом успішної реалізації проектів
            різної складності для житлового та комерційного будівництва
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="btn btn-primary"
            >
              Наші Послуги
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
            <Link
              to="/projects"
              className="btn btn-secondary text-white border-white hover:bg-white hover:text-navy-800"
            >
              Оглянути Проекти
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-gray-300">Прокрутіть вниз</span>
          <div className="w-0.5 h-8 bg-white opacity-50"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;