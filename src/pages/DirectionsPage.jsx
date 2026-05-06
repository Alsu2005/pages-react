// pages/DirectionsPage.js
import React, { useState, useEffect } from 'react';

const DirectionsPage = () => {
  const [directions, setDirections] = useState([]);
  const [filteredDirections, setFilteredDirections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Полные данные направлений (8 штук)
  const fullDirectionsData = [
    { id: 1, icon: "fas fa-robot", title: "Робототехника", description: "Сборка и программирование роботов, соревнования Lego WeDo, Arduino", category: "robot" },
    { id: 2, icon: "fas fa-code", title: "Веб-дизайн", description: "Создание таблиц, блочная верстка, CSS, HTML", category: "web" },
    { id: 3, icon: "fas fa-cube", title: "3D-моделирование", description: "3D-печать, CAD-системы, прототипирование", category: "3d" },
    { id: 4, icon: "fas fa-plane", title: "Авиамоделирование", description: "Конструирование самолетов, квадрокоптеров", category: "avia" },
    { id: 5, icon: "fas fa-microchip", title: "Электроника", description: "Схемотехника, микроконтроллеры, Arduino", category: "electron" },
    { id: 6, icon: "fas fa-car", title: "Автомоделирование", description: "Конструирование радиоуправляемых моделей автомобилей", category: "auto" },
    { id: 7, icon: "fas fa-vr-cardboard", title: "VR/AR разработка", description: "Создание виртуальной и дополненной реальности", category: "vr" },
    { id: 8, icon: "fas fa-gamepad", title: "Разработка игр", description: "Создание компьютерных игр на Unity и Unreal Engine", category: "games" }
  ];
//!mockapi!
  useEffect(() => {
    const fetchDirections = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://69ed00a7af4ff533142b9325.mockapi.io/examplee/example2');
        
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setDirections(data);
          } else {
            setDirections(fullDirectionsData);
          }
        } else {
          setDirections(fullDirectionsData);
        }
      } catch (error) {
        console.error('Error:', error);
        setDirections(fullDirectionsData);
      } finally {
        setLoading(false);
      }
    };

    fetchDirections();
  }, []);

  // Применяем фильтры
  useEffect(() => {
    let filtered = [...directions];
    
    // Фильтр по категории
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(dir => dir.category === selectedCategory);
    }
    
    // Поиск по названию и описанию
    if (searchTerm) {
      filtered = filtered.filter(dir => 
        dir.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dir.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredDirections(filtered);
  }, [searchTerm, selectedCategory, directions]);

  // Категории для фильтрации
  const categories = [
    { value: 'all', label: 'Все направления', icon: 'fas fa-th-large' },
    { value: 'robot', label: 'Робототехника', icon: 'fas fa-robot' },
    { value: 'web', label: 'Веб-дизайн', icon: 'fas fa-code' },
    { value: '3d', label: '3D-моделирование', icon: 'fas fa-cube' },
    { value: 'avia', label: 'Авиамоделирование', icon: 'fas fa-plane' },
    { value: 'electron', label: 'Электроника', icon: 'fas fa-microchip' },
    { value: 'auto', label: 'Автомоделирование', icon: 'fas fa-car' },
    { value: 'vr', label: 'VR/AR', icon: 'fas fa-vr-cardboard' },
    { value: 'games', label: 'Разработка игр', icon: 'fas fa-gamepad' }
  ];

  // Сброс всех фильтров
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  return (
    <main>
      <div className="page-banner">
        <div className="container">
          <h1>Направления обучения</h1>
          <p>Выберите то, что интересно вашему ребенку</p>
        </div>
      </div>

      <section className="directions-preview" style={{ padding: '80px 0' }}>
        <div className="container">
          
          {/* Панель поиска и фильтрации */}
          <div style={{
            background: 'white',
            borderRadius: '28px',
            padding: '30px',
            marginBottom: '40px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
            border: '1px solid #eef2ff'
          }}>
            
            {/* Строка поиска */}
            <div style={{ marginBottom: '25px' }}>
              <div style={{ position: 'relative' }}>
                <i className="fas fa-search" style={{
                  position: 'absolute',
                  left: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6366f1'
                }}></i>
                <input
                  type="text"
                  placeholder="Поиск направления..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 20px 14px 45px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    style={{
                      position: 'absolute',
                      right: '18px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: '#94a3b8',
                      cursor: 'pointer'
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>
            
            {/* Фильтр по категориям */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '12px', 
                fontWeight: '600',
                color: '#0f172a'
              }}>
                <i className="fas fa-filter"></i> Категории:
              </label>
              <div style={{ 
                display: 'flex', 
                gap: '10px', 
                flexWrap: 'wrap' 
              }}>
                {categories.map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    style={{
                      padding: '8px 20px',
                      background: selectedCategory === cat.value ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'white',
                      color: selectedCategory === cat.value ? 'white' : '#475569',
                      border: selectedCategory === cat.value ? 'none' : '2px solid #e2e8f0',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <i className={cat.icon}></i>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Кнопка сброса фильтров */}
            {(searchTerm || selectedCategory !== 'all') && (
              <div style={{ marginTop: '20px', textAlign: 'right' }}>
                <button
                  onClick={resetFilters}
                  style={{
                    padding: '8px 20px',
                    background: '#f1f5f9',
                    border: 'none',
                    borderRadius: '50px',
                    color: '#6366f1',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  <i className="fas fa-undo-alt"></i> Сбросить фильтры
                </button>
              </div>
            )}
          </div>
          
          {/* Результат поиска */}
          <div style={{ marginBottom: '20px', color: '#64748b' }}>
            {!loading && (
              <p>
                <i className="fas fa-info-circle"></i> Найдено: {filteredDirections.length} из {directions.length} направлений
                {searchTerm && ` • Поиск: "${searchTerm}"`}
                {selectedCategory !== 'all' && ` • Категория: ${categories.find(c => c.value === selectedCategory)?.label}`}
              </p>
            )}
          </div>
          
          {/* Сетка направлений */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px' }}>
              <i className="fas fa-spinner fa-spin" style={{ fontSize: '48px', color: '#6366f1' }}></i>
              <p>Загрузка...</p>
            </div>
          ) : (
            <>
              <div className="directions-grid">
                {filteredDirections.map((dir) => (
                  <div className="direction-card" key={dir.id}>
                    <div className="card-icon">
                      <i className={dir.icon}></i>
                    </div>
                    <h3>{dir.title}</h3>
                    <p>{dir.description}</p>
                    <a href="/contacts" className="card-link">
                      Записаться <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                ))}
              </div>
              
              {/* Если ничего не найдено */}
              {filteredDirections.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  background: '#f8fafc',
                  borderRadius: '28px'
                }}>
                  <i className="fas fa-search" style={{ fontSize: '48px', color: '#cbd5e1' }}></i>
                  <h3 style={{ marginTop: '20px', color: '#475569' }}>Ничего не найдено</h3>
                  <p style={{ color: '#64748b' }}>Попробуйте изменить параметры поиска</p>
                  <button
                    onClick={resetFilters}
                    style={{
                      marginTop: '20px',
                      padding: '10px 24px',
                      background: '#6366f1',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      cursor: 'pointer'
                    }}
                  >
                    Сбросить фильтры
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Секция с режимом работы */}
      <section className="schedule">
        <div className="container">
          <div className="schedule-card">
            <h2>Режим работы</h2>
            <div className="schedule-info">
              <p><strong>Понедельник - Пятница:</strong> 09:00 - 19:00</p>
              <p><strong>Суббота:</strong> 09:00 - 18:00</p>
              <p><strong>Воскресенье:</strong> 09:00 - 15:00</p>
            </div>
            <a href="/contacts" className="btn-primary">Записаться на занятие</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DirectionsPage;