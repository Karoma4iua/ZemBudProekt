import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Building } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building className="w-8 h-8 text-blue-300" />
              <span className="ml-2 text-xl font-bold">ЗемБудПроект</span>
            </div>
            <p className="mb-4 text-gray-300">
              Проектуємо та будуємо ваші мрії з 2001 року
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Швидкі Посилання</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Головна
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Послуги
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Наші Об'єкти
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Про нас
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                  Новини
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Наші Послуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Проектування будівель
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Будівництво
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Консультації та супровід
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Контактна Інформація</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 w-5 h-5 mr-2 text-blue-300" />
                <span>м. Рівне, вул. Сагайдачного 1</span>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 w-5 h-5 mr-2 text-blue-300" />
                <a href="tel:+380989061129" className="hover:text-blue-300 transition-colors">
                  +380 (98) 906-11-29
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 w-5 h-5 mr-2 text-blue-300" />
                <a href="mailto:zembudpoekt@gmail.com" className="hover:text-blue-300 transition-colors">
                  zembudpoekt@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-center border-t border-gray-700">
        <p className="text-sm text-gray-400">
          © {currentYear} ЗемБудПроект. Всі права захищено. З 2001 року.
        </p>
      </div>
    </footer>
  );
};

export default Footer;