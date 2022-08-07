import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import common_ku from './translations/ku/common.json';
import common_en from './translations/en/common.json';
import common_ar from './translations/ar/common.json';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
const container = document.getElementById('root');

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    ku: {
      common: common_ku,
    },
  },
});

const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
