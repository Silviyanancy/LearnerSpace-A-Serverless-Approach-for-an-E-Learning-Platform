import React from 'react';
import ReactDOM from 'react-dom';
import { CourseProvider } from './states/courses';
import App from './App';
import './index.css';
import { CourseCartProvider } from './states/cart';

ReactDOM.render(
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  <CourseProvider>
    <CourseCartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CourseCartProvider>
  </CourseProvider>,
  document.getElementById('root')
);