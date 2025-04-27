import React, { useEffect } from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import GoogleMap from '../components/contact/GoogleMap';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Контакти - ЗемБудПроект';
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h1 className="mb-4 text-center">Контакти</h1>
          <p className="max-w-3xl mx-auto text-center text-gray-600">
            Зв'яжіться з нами для отримання професійної консультації або запису на зустріч 
            з нашими спеціалістами. Ми завжди готові допомогти вам з вашими питаннями.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16">
        <div className="container">
          <GoogleMap />
        </div>
      </section>
    </>
  );
};

export default ContactPage;