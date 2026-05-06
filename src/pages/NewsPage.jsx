// pages/NewsPage.js
import React, { useState } from 'react';

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState('news');

  const tabs = [
    { id: 'news', label: '📰 Новости центра' },
    { id: 'events', label: '🎉 Мероприятия' },
    { id: 'competitions', label: '🏆 Соревнования' }
  ];

  const newsData = {
    news: [
      { image: "img/hands-holding-globe-glass-earth-globe-earth-day-world-environment-day-concept_327072-8324.avif", date: "8 апреля 2026", title: "Большая содовая олимпиада по экологии", desc: "В нашем центре прошла 'Большая содовая олимпиада по экологии'. Участники продемонстрировали глубокие знания в области охраны окружающей среды, экологических проблем и способов их решения. Поздравляем победителей!", badge: "Новость", badgeClass: "badge-news" },
      { image: "img/277_original.webp", date: "23 декабря 2024", title: "Правила пожарной безопасности в новогодние праздники", desc: "Новогодние праздники - это пора массовых мероприятий, вечеров отдыха. Только строгое соблюдение требований правил пожарной безопасности при организации и проведении праздничных мероприятий поможет избежать травм, увечий, а также встретить Новый год более безопасно.", badge: "Новость", badgeClass: "badge-news" }
    ],
    events: [
      { image: "img/space_bg_3_1.jpg", date: "11 апреля 2026", title: "Большая космическая неделя", desc: "Мероприятие направлено на популяризацию Дня космонавтики, повышение престижа профессий в космической отрасли, формирование гражданской позиции и духовно-нравственных ценностей подрастающего поколения через пропаганду достижений отечественной космонавтики, развитие творческих и технических способностей обучающихся.", badge: "Мероприятие", badgeClass: "badge-event" },
      { image: "img/2025-05-24_09-38-17.jpeg", date: "15 января 2025", title: "Республиканский фестиваль «РобоФест 2025»", desc: "Регистрация на фестиваль РобоФест Башкортостан 2025 открыта! Приглашаем всех юных робототехников и программистов принять участие в соревнованиях по робототехнике, программированию и инженерным проектам.", badge: "Мероприятие", badgeClass: "badge-event" }
    ],
    competitions: [
      { image: "img/09069842290dc679213312a59b53c37e.jpg", date: "3 февраля 2025", title: "Всероссийские соревнования по авиамодельному спорту F-2D", desc: "19 и 20 апреля 2025 года в г. Стерлитамак пройдут Всероссийские соревнования по авиамодельному спорту в классе моделей F-2D («воздушный бой») и Всероссийские соревнования по авиамодельному спорту в классе моделей F-2D среди юниоров.", badge: "Соревнования", badgeClass: "badge-competition" },
      { image: "img/og_og_1479895921282530061.jpg", date: "22 января 2025", title: "Республиканские соревнования по дрон-рейсингу", desc: "1 февраля 2025 года в г. Стерлитамак прошли соревнования по авиамодельному спорту в классе F9U (дроны): открытый Чемпионат Республики Башкортостан, открытое первенство Республики Башкортостан и открытые городские соревнования среди учащихся.", badge: "Соревнования", badgeClass: "badge-competition" }
    ]
  };

  const galleryImages = [
    { src: "img/oCvTCSXRyP0wWSG7OVnd1sTpk3X5cSuD9ChD9-zdy9iIyk_AP909eKKtjc7hHBPtUG1JPxgsftLiofI31RCWWz3D.jpg", title: "Соревнования роботов", desc: "Командные состязания по робототехнике среди школьников" },
    { src: "img/oP9g3wLyDgCNoXxgT1xnQFy8D99jikWjr3RH0CTC79c07KYMjF1HmyaWcYdEtTngnfCWJkKdmwIIjnR6JOtXrf5i.jpg", title: "3D-моделирование и печать", desc: "Занятия в лаборатории аддитивных технологий" },
    { src: "img/OT3y9J85iKaDAaDSPNbOuuQgsDM50JVsnaY9-PpTKBRXqjz98jNR6Xf2XVp1A4Kio7DU5ODzPc3kAQiit02mhjYg.jpg", title: "Авиамодельный спорт", desc: "Подготовка к всероссийским соревнованиям F-2D" },
    { src: "img/-o1fHr8uMY-d-aj3PgDdN3z5XwnnEKHo-gcMHQAubXl9dRTxAbk_IYrQrFoufzY9ExxIGFZjNI9kcUJfhAK5J0PG.jpg", title: "Дрон-рейсинг F9U", desc: "Республиканские соревнования по управлению дронами" }
  ];

  return (
    <main>
      <div className="page-banner">
        <div className="container">
          <h1>Новости и события</h1>
          <p>Актуальные мероприятия, соревнования и достижения центра</p>
        </div>
      </div>

      <section style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <div className="news-tabs">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} 
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {tabs.map(tab => (
            <div key={tab.id} className={`news-section ${activeTab === tab.id ? 'active-section' : ''}`}>
              <div className="grid-2cols">
                {newsData[tab.id].map((item, index) => (
                  <div className="news-card-large" key={index}>
                    <div className="news-img-large">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="news-content-large">
                      <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
                      <div className="news-date" style={{ marginTop: '12px' }}><i className="far fa-calendar-alt"></i> {item.date}</div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '40px 0 80px', background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Наша жизнь в кадрах</span>
            <h2>Фотогалерея мероприятий</h2>
            <p>Яркие моменты соревнований, праздников и занятий</p>
          </div>
          <div className="directions-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {galleryImages.map((img, index) => (
              <div className="direction-card" style={{ padding: 0, overflow: 'hidden' }} key={index}>
                <img src={img.src} alt={img.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h3>{img.title}</h3>
                  <p>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;