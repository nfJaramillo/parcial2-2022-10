import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";
import {IntlProvider} from 'react-intl';

var lng = (navigator.language)
lng = lng.charAt(0) + lng.charAt(1)
lng = lng.toLowerCase()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={lng} messages= {lng==="es"? localeEsMessages: localeEnMessages}>
    <App />
  </IntlProvider>
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
