import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const news = [
  {
    id: 1,
    title: 'Завершено будівництво житлового комплексу "Едельвейс"',
    excerpt: 'Ми раді повідомити про успішне завершення будівництва нового житлового комплексу у центрі міста.',
    date: '10.04.2025',
    author: 'Адміністрація',
    image: 'https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg',
  },
  {
    id: 2,
    title: 'Новий проект - Бізнес-центр "Магнат"',
    excerpt: 'Розпочато роботу над новим амбіційним проектом - сучасним бізнес-центром класу А+.',
    date: '22.03.2025',
    author: 'Адміністрація',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
  },
  {
    id: 3,
    title: 'Участь у міжнародній будівельній виставці',
    excerpt: 'Наша компанія взяла участь у міжнародній виставці сучасних будівельних технологій.',
    date: '15.02.2025',
    author: 'Відділ маркетингу',
    image: 'https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg',
  },
];

const LatestNews: React.FC = () => {
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
          <h2>Останні новини</h2>
          <p>
            Будьте в курсі останніх подій компанії та цікавих новин у сфері будівництва
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {news.map((item) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-card hover:shadow-lg hover:-translate-y-2"
            >
              <Link to={`/news/${item.id}`} className="block">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{item.author}</span>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  <Link to={`/news/${item.id}`} className="hover:text-blue-600">
                    {item.title}
                  </Link>
                </h3>
                <p className="mb-4 text-gray-600">{item.excerpt}</p>
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                >
                  Читати далі
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/news" className="btn btn-primary">
            Всі новини
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;