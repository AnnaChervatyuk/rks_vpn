import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import { LangStore } from '../stores/';

const App = () => {
  LangStore.init();
  return (
    <div className="wrapper" id="wrapper">
      <>
        <Routes>
          <Route path="/" element={<MainPage />} sitemapIndex="true" priority="1" />
          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route path="/index.html" element={<MainPage />} sitemapIndex="true" priority="1" />
        </Routes>
      </>
    </div>
  );
};

export default App;
