import React, { useEffect } from 'react';
import { Building2, HardHat, ClipboardCheck, Users, FileText, Truck, Scale, MapPin } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Проектування будівель',
    description:
      'Наша компанія спеціалізується на розробці архітектурних та конструктивних рішень для житлових, комерційних та промислових об\'єктів. Ми забезпечуємо повний цикл проектування: від концепції до робочої документації.',
    icon: Building2,
    features: [
      'Архітектурне проектування',
      'Конструктивні рішення',
      'Інженерні системи',
      'Кошторисна документація',
      '3D-візуалізація проекту',
    ],
    image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg',
  },
  {
    id: 2,
    title: 'Будівництво',
    description:
      'Ми здійснюємо будівництво об\'єктів різного призначення з використанням сучасних технологій та матеріалів. Наша команда професіоналів гарантує високу якість робіт та дотримання термінів.',
    icon: HardHat,
    features: [
      'Житлове будівництво',
      'Комерційне будівництво',
      'Промислові об\'єкти',
      'Реконструкція та ремонт',
      'Ландшафтний дизайн',
    ],
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
  },
  {
    id: 3,
    title: 'Консультації та супровід',
    description:
      'Ми надаємо консультаційні послуги на всіх етапах будівництва, допомагаючи клієнтам у вирішенні технічних, юридичних та організаційних питань, пов\'язаних з реалізацією будівельних проектів.',
    icon: ClipboardCheck,
    features: [
      'Технічний нагляд',
      'Авторський нагляд',
      'Юридичний супровід',
      'Введення в експлуатацію',
      'Післяпроектне обслуговування',
    ],
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
  },
];

const additionalServices = [
  {
    id: 4,
    title: 'Професійні консультації',
    description: 'Експертні консультації з питань проектування та будівництва.',
    icon: Users,
  },
  {
    id: 5,
    title: 'Оформлення документів',
    description: 'Допомога в отриманні дозвільної документації.',
    icon: FileText,
  },
  {
    id: 6,
    title: 'Логістика матеріалів',
    description: 'Організація поставок будівельних матеріалів.',
    icon: Truck,
  },
  {
    id: 7,
    title: 'Підбір ділянок',
    description: 'Допомога у виборі земельної ділянки для будівництва.',
    icon: MapPin,
  },
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Послуги - ЗемБудПроект';
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h1 className="mb-4 text-center">Наші послуги</h1>
          <p className="max-w-3xl mx-auto text-center text-gray-600">
            Ми пропонуємо повний спектр послуг з проектування та будівництва,
            з індивідуальним підходом до кожного клієнта та проекту
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative h-full">
                    <div className="overflow-hidden rounded-lg shadow-lg h-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white bg-blue-600 rounded-full">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                  <p className="mb-6 text-gray-600">{service.description}</p>

                  <h3 className="mb-4 text-xl font-semibold">Що ми пропонуємо:</h3>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Додаткові послуги</h2>
            <p>
              Крім основних послуг, ми також пропонуємо ряд додаткових сервісів,
              які допоможуть вам втілити ваш проект у життя
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-white rounded-lg shadow-card hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-600 rounded-full">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Готові почати ваш проект?</h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            Наша команда готова допомогти вам втілити ваші будівельні мрії в реальність.
            Зв'яжіться з нами для отримання консультації та розрахунку вартості проекту.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Зв'язатися з нами
          </a>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;