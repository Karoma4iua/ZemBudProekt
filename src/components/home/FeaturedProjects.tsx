import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'Житловий комплекс "Едельвейс"',
    category: 'Житлове будівництво',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
  },
  {
    id: 2,
    title: 'Бізнес-центр "Магнат"',
    category: 'Комерційне будівництво',
    image: 'https://images.pexels.com/photos/273683/pexels-photo-273683.jpeg',
  },
  {
    id: 3,
    title: 'Котеджне містечко "Затишок"',
    category: 'Житлове будівництво',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  },
  {
    id: 4,
    title: 'Торговий центр "Палац"',
    category: 'Комерційне будівництво',
    image: 'https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg',
  },
];

const FeaturedProjects: React.FC = () => {
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
        <div className="section-title">
          <h2>Наші об'єкти</h2>
          <p>
            Перегляньте наші реалізовані проекти, які демонструють наш досвід та якість
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg shadow-card"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-blue-600 rounded">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-medium">{project.title}</h3>
                </div>
              </div>
              <Link to="/projects" className="absolute inset-0" aria-label={project.title}></Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/projects" className="btn btn-primary">
            Всі проекти
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;