import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {User} from "./06_callbacks_07_Destructing_assignment/06_callbacks";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>
);

reportWebVitals();
