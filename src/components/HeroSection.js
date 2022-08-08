import React from 'react';
import ReactCarousel from './ReactCarousel';
import { useTranslation } from 'react-i18next';
export default function HeroSection() {
  const { t, i18n } = useTranslation('common');

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 ">
      <div className=" flex flex-col items-center justify-center">
        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          {t('welcome.title')}
          <span className="text-indigo-600">{t('welcome.shop')}</span>
        </h2>
        <p className="text-2xl text-gray-500 mt-3">{t('welcome.title')}</p>
        <div className="mt-10">
          <button className="shadow-md hover:shadow-lg bg-indigo-600 text-white px-6 py-4 rounded-lg text-xl font-semibold mr-4">
            View Products
          </button>
          <button className="shadow-md hover:shadow-lg bg-white text-indigo-600 px-6 py-4 rounded-lg text-xl font-semibold">
            View Categories
          </button>
        </div>
      </div>
      <div className="">
        {/* <img
          className="h-full w-auto object-cover"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="woman holding bags while shopping"
        /> */}
        <ReactCarousel />
      </div>
    </div>
  );
}
