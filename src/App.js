import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Компоненты
import Header from './components/Header';
import Footer from './components/Footer';

// Страницы
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DirectionsPage from './pages/DirectionsPage';
import NewsPage from './pages/NewsPage';
import ContactsPage from './pages/ContactsPage';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/directions" element={<DirectionsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;