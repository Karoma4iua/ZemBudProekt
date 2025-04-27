import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

type NewsArticle = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
};

const newsData: NewsArticle[] = [
  {
    id: 1,
    title: 'Завершено будівництво житлового комплексу "Едельвейс"',
    excerpt: 'Ми раді повідомити про успішне завершення будівництва нового житлового комплексу у центрі міста.',
    content: `<p>Наша компанія "ЗемБудПроект" з гордістю оголошує про успішне завершення будівництва нового житлового комплексу "Едельвейс" у самому центрі міста Рівне.</p>
    <p>Цей масштабний проект включає в себе 5 житлових будинків загальною площею понад 30 000 квадратних метрів, підземний паркінг на 200 автомобілів, дитячий майданчик, спортивну зону та озеленену територію.</p>
    <p>Особливістю комплексу є використання інноваційних енергозберігаючих технологій, що дозволить майбутнім мешканцям значно економити на комунальних послугах.</p>
    <p>Всі квартири в комплексі побудовані з використанням високоякісних матеріалів та оснащені сучасними інженерними системами. Фасад будівлі виконаний у сучасному стилі з використанням елементів класичної архітектури.</p>
    <p>Проект був реалізований нашою командою за 2 роки. Незважаючи на ряд викликів, пов'язаних з пандемією та логістичними труднощами, нам вдалося завершити будівництво точно у заплановані терміни.</p>
    <p>Вже цього місяця перші мешканці зможуть отримати ключі від своїх нових квартир та оцінити високу якість нашої роботи.</p>
    <p>Ми дякуємо всім партнерам та підрядникам, які брали участь у реалізації цього проекту, а також майбутнім мешканцям за довіру до нашої компанії.</p>`,
    date: '10.04.2025',
    author: 'Адміністрація',
    image: 'https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg',
    category: 'Проекти',
  },
  {
    id: 2,
    title: 'Новий проект - Бізнес-центр "Магнат"',
    excerpt: 'Розпочато роботу над новим амбіційним проектом - сучасним бізнес-центром класу А+.',
    content: `<p>Компанія "ЗемБудПроект" розпочала роботу над новим амбіційним проектом - бізнес-центром класу А+ "Магнат" у діловому районі міста.</p>
    <p>Цей інноваційний проект стане новою архітектурною домінантою міста та забезпечить найсучасніші офісні приміщення для вітчизняних та міжнародних компаній.</p>
    <p>Бізнес-центр "Магнат" — це 15-поверхова будівля з панорамними вікнами, загальною площею 25 000 квадратних метрів. Проект передбачає наявність великого підземного паркінгу, ресторанів, кафе, конференц-залів та зон відпочинку.</p>
    <p>Особлива увага приділяється екологічній складовій проекту. Будівля матиме власну систему збору та очищення дощової води, сонячні панелі на даху та "зелені" тераси на кількох поверхах.</p>
    <p>Наша команда спеціалістів уже розробила детальний проект та отримала всі необхідні дозволи на будівництво. Завершення проекту заплановано на кінець 2026 року.</p>
    <p>Ми впевнені, що бізнес-центр "Магнат" стане важливим кроком у розвитку ділової інфраструктури міста та створить нові можливості для бізнесу.</p>`,
    date: '22.03.2025',
    author: 'Адміністрація',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
    category: 'Проекти',
  },
  {
    id: 3,
    title: 'Участь у міжнародній будівельній виставці',
    excerpt: 'Наша компанія взяла участь у міжнародній виставці сучасних будівельних технологій.',
    content: `<p>З 10 по 15 лютого 2025 року представники компанії "ЗемБудПроект" взяли участь у міжнародній виставці сучасних будівельних технологій, яка проходила у виставковому центрі "Експоцентр".</p>
    <p>Ця найбільша в Україні будівельна виставка зібрала понад 500 учасників з 25 країн світу, які представили найновіші досягнення в галузі будівництва, архітектури та дизайну.</p>
    <p>Наша компанія представила свій стенд, на якому було продемонстровано наші найуспішніші проекти, а також інноваційні технічні рішення, які ми використовуємо у роботі.</p>
    <p>Особливу увагу відвідувачів привернула наша презентація енергоефективних технологій, які дозволяють значно зменшити енергоспоживання будівель.</p>
    <p>Під час виставки наші спеціалісти провели кілька майстер-класів та взяли участь у тематичних дискусіях, присвячених сучасним тенденціям у будівництві.</p>
    <p>Також ми встановили нові контакти з потенційними партнерами та клієнтами, що відкриває нові перспективи для розвитку нашої компанії.</p>
    <p>Участь у таких заходах дозволяє нам бути в курсі останніх тенденцій у галузі та впроваджувати найсучасніші технології у наші проекти.</p>`,
    date: '15.02.2025',
    author: 'Відділ маркетингу',
    image: 'https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg',
    category: 'Події',
  },
];

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    // Find the article by ID
    const foundArticle = newsData.find((item) => item.id === Number(id));
    
    if (foundArticle) {
      setArticle(foundArticle);
      document.title = `${foundArticle.title} - ЗемБудПроект`;
      
      // Find related articles (same category, excluding current)
      const related = newsData
        .filter((item) => item.category === foundArticle.category && item.id !== foundArticle.id)
        .slice(0, 3);
      
      setRelatedArticles(related);
    } else {
      document.title = 'Статтю не знайдено - ЗемБудПроект';
    }
  }, [id]);

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 py-32 bg-white">
        <div className="max-w-md text-center">
          <h1 className="mb-4 text-6xl font-bold text-blue-600">404</h1>
          <h2 className="mb-6 text-3xl font-semibold">Статтю не знайдено</h2>
          <p className="mb-8 text-gray-600">
            Вибачте, стаття, яку ви шукаєте, не існує або була видалена.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Повернутися до новин
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Article Header */}
      <header className="relative pt-32 pb-16 bg-gray-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${article.image}')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="container relative z-10">
          <Link
            to="/news"
            className="inline-flex items-center mb-6 text-blue-300 hover:text-blue-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Повернутися до новин
          </Link>

          <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="w-5 h-5 mr-2" />
              <span>{article.category}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Поділитися:</span>
                <a
                  href="#"
                  className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 text-white bg-blue-400 rounded-full hover:bg-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
                  </svg>
                </a>
              </div>

              <Link
                to="/news"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Всі новини
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="mb-10 text-3xl font-bold text-center">Схожі статті</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <article
                  key={relatedArticle.id}
                  className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-card hover:shadow-lg hover:-translate-y-2"
                >
                  <Link to={`/news/${relatedArticle.id}`} className="block">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{relatedArticle.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        <span>{relatedArticle.category}</span>
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">
                      <Link to={`/news/${relatedArticle.id}`} className="hover:text-blue-600">
                        {relatedArticle.title}
                      </Link>
                    </h3>
                    <p className="mb-4 text-gray-600">{relatedArticle.excerpt}</p>
                    <Link
                      to={`/news/${relatedArticle.id}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                    >
                      Читати далі
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default NewsDetailPage;