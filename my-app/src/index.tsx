import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './views/App';
import './views/styles/reset.scss';
import './views/styles/common.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
