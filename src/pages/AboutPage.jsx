// pages/AboutPage.js
import React from 'react';

const AboutPage = () => {
  const values = [
    { icon: "fas fa-lightbulb", title: "Инновации", desc: "Внедрение передовых технологий и методик обучения" },
    { icon: "fas fa-users", title: "Командность", desc: "Развитие навыков работы в команде и сотрудничества" },
    { icon: "fas fa-chart-line", title: "Развитие", desc: "Постоянное совершенствование и рост каждого ученика" },
    { icon: "fas fa-trophy", title: "Достижения", desc: "Стремление к победам и высоким результатам" }
  ];

  return (
    <main>
      <div className="page-banner">
        <div className="container">
          <h1>О нашем центре</h1>
          <p>История, миссия и достижения</p>
        </div>
      </div>

      <section className="about-history">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Центр детского технического творчества г. Стерлитамак</h2>
              <p>МАУ ДО «Центр детского (юношеского) технического творчества» — ведущее учреждение дополнительного образования в городе Стерлитамак и Республике Башкортостан. Мы работаем с 1998 года, помогая юным талантам раскрыть свой потенциал в области технических наук и инженерии.</p>
              <p>Наша миссия — создание условий для развития технического творчества детей и молодежи, формирование инженерного мышления и подготовка кадров для высокотехнологичных отраслей экономики.</p>
              <div className="achievements">
                <div className="achievement-item">
                  <span className="achievement-number">25+</span>
                  <span>лет успешной работы</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">5000+</span>
                  <span>выпускников</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">300+</span>
                  <span>победителей конкурсов</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="img/77jb4PZGR--FvYXUoH5PE9SCzoSskqLwudvv-xYzCYfnR6aBLmVUFlh9DgCdb6zTjls0Tj7QDZ3_kX15OWvQSSrh.jpg" alt="Центр технического творчества" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-header" style={{ marginBottom: '20px' }}>Наши ценности</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div className="value-card" key={index}>
                  <i className={value.icon}></i>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;