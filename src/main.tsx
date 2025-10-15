import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA4 from 'react-ga4';
import App from './App.tsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';

const MEASUREMENT_ID = 'G-EEK5P7GYD4';
ReactGA4.initialize(MEASUREMENT_ID);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
