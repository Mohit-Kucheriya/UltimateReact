import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppComposition from './AppComposition';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <AppComposition />

    {/* <StarRating maxRating={5} message={["Terrible", "Bad", "OK", "Good", "Great"]} defaultRating={3} /> */}

  </React.StrictMode>
);
