import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    reset();
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-8">
      {isSubmitSuccessful ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white bg-green-500 rounded-full">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mb-4 text-2xl font-bold">Дякуємо за ваше повідомлення!</h3>
          <p className="mb-6 text-gray-600">
            Ми отримали ваш запит і зв'яжемося з вами найближчим часом.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-primary"
          >
            Надіслати ще одне повідомлення
          </button>
        </div>
      ) : (
        <>
          <h3 className="mb-6 text-2xl font-bold">Напишіть нам</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Ім'я *
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('name', {
                    required: "Обов'язкове поле",
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('email', {
                    required: "Обов'язкове поле",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Неправильний формат email',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                  Телефон
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  {...register('phone')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                  Тема *
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('subject', {
                    required: "Обов'язкове поле",
                  })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                Повідомлення *
              </label>
              <textarea
                id="message"
                rows={5}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('message', {
                  required: "Обов'язкове поле",
                  minLength: {
                    value: 10,
                    message: 'Повідомлення має містити щонайменше 10 символів',
                  },
                })}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full md:w-auto"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Відправляємо...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Надіслати повідомлення
                </span>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;