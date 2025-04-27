import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Search } from 'lucide-react';

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
    content: 'Детальний опис проекту та процесу будівництва.',
    date: '10.04.2025',
    author: 'Адміністрація',
    image: 'https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg',
    category: 'Проекти',
  },
  {
    id: 2,
    title: 'Новий проект - Бізнес-центр "Магнат"',
    excerpt: 'Розпочато роботу над новим амбіційним проектом - сучасним бізнес-центром класу А+.',
    content: 'Детальний опис проекту та процесу будівництва.',
    date: '22.03.2025',
    author: 'Адміністрація',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
    category: 'Проекти',
  },
  {
    id: 3,
    title: 'Участь у міжнародній будівельній виставці',
    excerpt: 'Наша компанія взяла участь у міжнародній виставці сучасних будівельних технологій.',
    content: 'Детальний опис події та нашої участі.',
    date: '15.02.2025',
    author: 'Відділ маркетингу',
    image: 'https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg',
    category: 'Події',
  },
  {
    id: 4,
    title: 'Нова технологія утеплення фасадів',
    excerpt: 'Ми впровадили нову технологію утеплення фасадів, яка дозволяє значно підвищити енергоефективність будівель.',
    content: 'Детальний опис технології та її переваг.',
    date: '05.02.2025',
    author: 'Технічний відділ',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    category: 'Технології',
  },
  {
    id: 5,
    title: 'Розширення штату компанії',
    excerpt: 'У зв\'язку з розширенням діяльності наша компанія оголошує набір нових співробітників.',
    content: 'Детальна інформація про вакансії та умови праці.',
    date: '20.01.2025',
    author: 'HR відділ',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    category: 'Компанія',
  },
  {
    id: 6,
    title: 'Партнерство з постачальниками будівельних матеріалів',
    excerpt: 'Ми уклали нові договори співпраці з провідними постачальниками якісних будівельних матеріалів.',
    content: 'Детальна інформація про партнерство та його переваги для клієнтів.',
    date: '10.01.2025',
    author: 'Комерційний відділ',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    category: 'Партнерство',
  },
];

const categories = ['Всі', 'Проекти', 'Технології', 'Події', 'Компанія', 'Партнерство'];

const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Всі');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>(newsData);

  useEffect(() => {
    document.title = 'Новини - ЗемБудПроект';
  }, []);

  useEffect(() => {
    let filtered = newsData;

    // Filter by category
    if (selectedCategory !== 'Всі') {
      filtered = filtered.filter((article) => article.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(query) || 
          article.excerpt.toLowerCase().includes(query)
      );
    }

    setFilteredNews(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Page Header */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h1 className="mb-4 text-center">Новини</h1>
          <p className="max-w-3xl mx-auto text-center text-gray-600">
            Будьте в курсі останніх подій компанії та цікавих новин у сфері будівництва
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Пошук новин..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
              <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="container">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.map((article) => (
                <article
                  key={article.id}
                  className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-card hover:shadow-lg hover:-translate-y-2"
                >
                  <Link to={`/news/${article.id}`} className="block">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-0 right-0 m-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">
                      <Link to={`/news/${article.id}`} className="hover:text-blue-600">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mb-4 text-gray-600">{article.excerpt}</p>
                    <Link
                      to={`/news/${article.id}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                    >
                      Читати далі
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <h3 className="text-xl font-medium">Новини не знайдено</h3>
              <p className="mt-2 text-gray-600">
                Спробуйте змінити параметри пошуку або категорію
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Підпишіться на наші новини</h2>
          <p className="mb-8 text-gray-600">
            Отримуйте найсвіжішу інформацію про наші проекти, події та новини компанії 
            прямо на вашу електронну пошту
          </p>
          <form className="flex flex-col justify-center gap-4 mx-auto md:flex-row">
            <input
              type="email"
              placeholder="Ваш email"
              className="px-4 py-3 border border-gray-300 rounded-md md:w-96 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Підписатися
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewsPage;