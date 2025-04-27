import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Award, Users, Briefcase } from 'lucide-react';

const achievements = [
  { id: 1, value: '20+', label: 'років досвіду' },
  { id: 2, value: '150+', label: 'завершених проектів' },
  { id: 3, value: '50+', label: 'професійних співробітників' },
  { id: 4, value: '25+', label: 'партнерів та підрядників' },
];

const coreValues = [
  {
    id: 1,
    title: 'Якість',
    description: 'Ми прагнемо до найвищих стандартів якості у кожному аспекті нашої роботи.',
    icon: CheckCircle,
  },
  {
    id: 2,
    title: 'Професіоналізм',
    description: 'Наша команда складається з висококваліфікованих фахівців з великим досвідом роботи.',
    icon: Users,
  },
  {
    id: 3,
    title: 'Інновації',
    description: 'Ми застосовуємо сучасні технології та інноваційні рішення у своїх проектах.',
    icon: Award,
  },
  {
    id: 4,
    title: 'Надійність',
    description: 'Ми завжди виконуємо свої зобов\'язання перед клієнтами, партнерами та співробітниками.',
    icon: Briefcase,
  },
];

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Про нас - ЗемБудПроект';
  }, []);

  const [historyRef, historyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Page Header */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h1 className="mb-4 text-center">Про нас</h1>
          <p className="max-w-3xl mx-auto text-center text-gray-600">
            Дізнайтеся більше про нашу компанію, нашу історію, цінності та команду
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
                    alt="Команда ЗемБудПроект"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <motion.div
              ref={historyRef}
              initial={{ opacity: 0, y: 50 }}
              animate={historyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
                Наша історія
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Більше 20 років досвіду в проектуванні та будівництві
              </h2>
              <p className="text-gray-600 mb-6">
                Компанія ЗемБудПроект була заснована у 2001 році з метою надання високоякісних послуг у сфері 
                проектування та будівництва. За більш ніж 20 років роботи ми реалізували понад 150 успішних 
                проектів різної складності та масштабу.
              </p>
              <p className="text-gray-600 mb-6">
                Починаючи з невеликої команди ентузіастів, сьогодні ми виросли до професійної компанії, 
                яка об'єднує архітекторів, інженерів, проектувальників та будівельників. Наш досвід 
                і професіоналізм дозволяють нам успішно втілювати в життя найскладніші проекти наших 
                клієнтів.
              </p>
              <p className="text-gray-600">
                Ми пишаємося нашою історією та досягненнями, але найбільшою нашою цінністю завжди 
                залишається довіра клієнтів та партнерів, яку ми заслужили роками чесної та якісної 
                роботи.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item) => (
              <div key={item.id} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-5xl font-bold mb-2">{item.value}</h3>
                  <p className="text-xl text-blue-100">{item.label}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container">
          <div className="section-title">
            <h2>Наша місія та цінності</h2>
            <p>
              Ми прагнемо забезпечити нашим клієнтам найкращі рішення для їхніх проектів, 
              базуючись на ключових цінностях нашої компанії
            </p>
          </div>

          <div className="mb-12 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Наша місія</h3>
            <p className="text-gray-600">
              Створювати якісні та функціональні будівлі, що покращують життя людей і розвивають 
              міське середовище, використовуючи інноваційні технології та дотримуючись принципів 
              сталого розвитку.
            </p>
          </div>

          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0 }}
            animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {coreValues.map((value) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex p-6 bg-white rounded-lg shadow-card hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                    <value.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Наша команда</h2>
            <p>
              Познайомтеся з нашими професійними співробітниками, які втілюють ваші проекти в життя
            </p>
          </div>

          <div className="mt-12 text-center">
            <div className="relative overflow-hidden rounded-lg shadow-xl max-w-md mx-auto mb-8">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Директор Семенюк Роман Віталійович"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Семенюк Роман Віталійович</h3>
            <p className="text-blue-600 mb-4">Директор</p>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Засновник та керівник компанії з 2001 року. Має вищу освіту в галузі цивільного 
              будівництва та більше 25 років досвіду роботи в будівельній сфері. Під його 
              керівництвом компанія успішно реалізувала численні проекти різної складності 
              та масштабу.
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="p-2 text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.968 10.302c.503-.419.967-.901 1.369-1.443h2.42v1.848a7.721 7.721 0 01-1.579.816 7.71 7.71 0 01-1.795.535 7.71 7.71 0 01-1.859.074 7.705 7.705 0 01-1.813-.385 7.708 7.708 0 01-1.649-.822 7.707 7.707 0 01-1.376-1.199 7.699 7.699 0 01-1.015-1.465 7.703 7.703 0 01-.595-1.644 7.71 7.71 0 01-.147-1.823 7.704 7.704 0 01.508-2.39c.238-.575.544-1.115.907-1.605H14.6a9.748 9.748 0 01-1.807 2.222h2.553v1.997h-5.88a5.71 5.71 0 00-.63 2.628c0 .928.22 1.77.63 2.496h4.501v1.842H6.717a5.711 5.711 0 01-.775-2.871c0-1.013.275-1.958.775-2.764h4.207a7.692 7.692 0 01.539-1.95h-5.3a7.71 7.71 0 01.646-1.164H13.968z" fillRule="evenodd"/>
                </svg>
              </a>
              <a
                href="#"
                className="p-2 text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8.245a4.744 4.744 0 01-1.313.36c.472-.282.836-.73.971-1.264a4.754 4.754 0 01-1.448.553A2.356 2.356 0 0012.923 7c-1.307 0-2.366 1.06-2.366 2.366 0 .186.02.366.06.54a6.716 6.716 0 01-4.87-2.474c-.204.35-.32.756-.32 1.19 0 .82.418 1.545 1.053 1.969a2.354 2.354 0 01-1.072-.296v.03c0 1.147.816 2.104 1.9 2.321a2.353 2.353 0 01-1.07.04c.301.94 1.174 1.625 2.21 1.644a4.75 4.75 0 01-3.5.98 6.696 6.696 0 003.631 1.064c4.357 0 6.74-3.607 6.74-6.74 0-.103-.003-.205-.008-.308a4.823 4.823 0 001.175-1.221z"/>
                </svg>
              </a>
              <a
                href="#"
                className="p-2 text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8c-3.845 0-6.98 3.135-6.98 7s3.135 7 6.98 7c3.845 0 6.98-3.135 6.98-7s-3.135-7-6.98-7zm4.874 3.756c-.477 0-.865-.427-.865-.954s.388-.954.865-.954.865.427.865.954-.387.954-.865.954zm-9.07 1.013h-1.358V15c0 .138-.112.25-.25.25h-1.464a.25.25 0 01-.25-.25v-2.232H7c-.66 0-1.2-.54-1.2-1.2v-.9c0-.66.54-1.2 1.2-1.2h1.482c.66 0 1.2.54 1.2 1.2v.9c0 .66-.54 1.2-1.2 1.2zm12.076-.3c0 .66-.54 1.2-1.2 1.2h-10.2c-.66 0-1.2-.54-1.2-1.2v-7.8c0-.66.54-1.2 1.2-1.2h10.2c.66 0 1.2.54 1.2 1.2v7.8zm-7.058 5.346a.585.585 0 01-.586-.586v-1.6a.585.585 0 01.586-.585h4.018a.585.585 0 01.586.585v1.6a.585.585 0 01-.586.586h-4.018z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Нагороди та сертифікати</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Кращий проект року 2022</h4>
                <p className="text-gray-600">За проект житлового комплексу "Едельвейс"</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Сертифікат ISO 9001</h4>
                <p className="text-gray-600">Система управління якістю</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Найкраща будівельна компанія 2020</h4>
                <p className="text-gray-600">За версією асоціації будівельників України</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Готові співпрацювати з нами?</h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-300">
            Зв'яжіться з нами для обговорення вашого проекту та отримання безкоштовної консультації
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 font-medium text-navy-800 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Зв'язатися з нами
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutPage;