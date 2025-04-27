import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Сторінку не знайдено - ЗемБудПроект';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-32 bg-white">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-6xl font-bold text-blue-600">404</h1>
        <h2 className="mb-6 text-3xl font-semibold">Сторінку не знайдено</h2>
        <p className="mb-8 text-gray-600">
          Вибачте, сторінка, яку ви шукаєте, не існує або була переміщена.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Повернутися на головну
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;