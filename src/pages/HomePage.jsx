// pages/HomePage.js
import React from 'react';

const HomePage = () => {
  const directions = [
    { icon: "fas fa-robot", title: "Робототехника", desc: "Сборка и программирование роботов, соревнования Lego WeDo, Arduino" },
    { icon: "fas fa-code", title: "Веб-дизайн", desc: "Создание таблиц, блочная верстка, CSS, HTML" },
    { icon: "fas fa-cube", title: "3D-моделирование", desc: "3D-печать, CAD-системы, прототипирование" },
    { icon: "fas fa-plane", title: "Авиамоделирование", desc: "Конструирование самолетов, квадрокоптеров" }
  ];

  const events = [
    { date: "03.02.2025", title: "Городской конкурс по космонавтике – 2025", desc: "20-й Городской конкурс «Космос: взгляд в будущее»." },
    { date: "18-19.04.2026", title: "Всероссийские соревнования по авиамодельному спорту F-2D", desc: "Соревнования в классе моделей F-2D («воздушный бой»)." },
    { date: "10-12.04.2026", title: "Республиканские соревнования по дрон-рейсингу", desc: "Чемпионат и первенство РБ по авиамодельному спорту в классе моделей F-9U." }
  ];

  const news = [
    { image: "https://sun9-17.userapi.com/s/v1/ig2/siAjTtDqs0SorfYkBKztCbB_9uSd3jqozjux2fjidaxhIzRvw3VuyyIHgxWgWlWhAKFZBCY4Q-lBa--IeuKGK8Q-.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,1600x1200&from=bu&cs=1600x0", date: "11.04.2026", title: "Большая космическая неделя", desc: "Мероприятие направлено на популяризацию Дня космонавтики." },
    { image: "https://sun9-9.userapi.com/s/v1/ig2/aHEsl-K7ufkXQXYoi96bz32EmYlFCQ3Zr5oM2az3vZQNP5ydWNqe2lcR7VA4lGieyurbo5VF3RqwwDfrLlQ4yFNH.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x541,1080x811,1280x961,1440x1081,2560x1922&from=bu&cs=2560x0", date: "03.02.2025", title: "Всероссийские соревнования по авиамодельному", desc: "19 и 20 апреля 2025 года в г. Стерлитамак пройдут Всероссийские соревнования по авиамодельному спорту в классе моделей F-2D («воздушный бой»)." },
    { image: "https://sun9-59.userapi.com/s/v1/ig2/OGafEz1MYF1XBPNQxfeMXsn9VXgdmRzHasc5vzmoWycBiBYW1Xz_ChpWnD0PcFXemr_aHRtVTiWkzdQgnOM2lMRO.jpg?quality=96&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=2560x0", date: "15.01.2025", title: "Республиканский фестиваль «РобоФест 2025»", desc: "Регистрация на фестиваль РобоФест Башкортостан 2025 открыта!" }
  ];

  const features = [
    { icon: "fas fa-flask", title: "Современное оборудование", desc: "3D-принтеры, станки ЧПУ, лаборатории робототехники" },
    { icon: "fas fa-chalkboard-user", title: "Опытные педагоги", desc: "Преподаватели-практики с профильным образованием" },
    { icon: "fas fa-trophy", title: "Победители конкурсов", desc: "Ежегодно наши ученики занимают призовые места" }
  ];

  return (
    <main>
      <section className="hero">
        <div className="hero-bg-gradient"></div>
        <div className="hero-particles"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <i className="fas fa-microchip"></i> Инновации. Технологии. Творчество
              </div>
              <h1 className="glow-text">Создаем <span className="highlight-gradient">будущее</span><br />сегодня</h1>
              <p>Центр детского технического творчества — пространство, где юные инженеры, программисты и изобретатели раскрывают свой потенциал и создают проекты, меняющие мир.</p>
              <div className="hero-buttons">
                <a href="/directions" className="btn-primary">
                  <span>Выбрать направление</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
                <a href="/contacts" className="btn-glass">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Записаться на занятие</span>
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <span className="stat-label">лет опыта</span>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <span className="stat-label">учеников</span>
                </div>
                <div className="stat-item">
                  <div className="stat-number">30+</div>
                  <span className="stat-label">педагогов</span>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <span className="stat-label">направлений</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-card floating-card-1">
                <i className="fas fa-robot"></i>
                <span>Робототехника</span>
              </div>
              <div className="floating-card floating-card-2">
                <i className="fas fa-code"></i>
                <span>Программирование</span>
              </div>
              <div className="floating-card floating-card-3">
                <i className="fas fa-drone"></i>
                <span>Дрон-рейсинг</span>
              </div>
              <div className="hero-image-wrapper">
                <img src="img/zxuPiS10dvDPBj3SzHP3vjggkcl5AF4fLwTcVCLcYRI4ZKcNk1SL7Zk5zDfXUrqGE2YrzzEk6E-YmLCRW5un91ki.jpg" alt="Юные инженеры" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      <section className="events">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Актуальные события</span>
            <h2>Мероприятия и соревнования</h2>
            <p>Присоединяйтесь к масштабным событиям центра</p>
          </div>
          <div className="events-grid">
            {events.map((event, index) => (
              <div className="event-card" key={index}>
                <div className="event-date">{event.date}</div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="directions-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Направления обучения</span>
            <h2>Выбери свое будущее</h2>
            <p>Современные программы для детей от 7 до 17 лет</p>
          </div>
          <div className="directions-grid">
            {directions.map((dir, index) => (
              <div className="direction-card" key={index}>
                <div className="card-icon"><i className={dir.icon}></i></div>
                <h3>{dir.title}</h3>
                <p>{dir.desc}</p>
                <a href="/directions" className="card-link">Подробнее <i className="fas fa-arrow-right"></i></a>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/directions" className="btn-outline-glow">Все направления <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section className="news-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Будьте в курсе</span>
            <h2>Новости центра</h2>
            <p>Важные события и достижения наших учеников</p>
          </div>
          <div className="news-grid">
            {news.map((item, index) => (
              <div className="news-card" key={index}>
                <div className="news-img" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="news-text">
                  <div className="news-date"><i className="far fa-calendar-alt"></i> {item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="/news" className="read-more">Читать далее <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/news" className="btn-outline-glow">Все новости <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section className="about-short">
        <div className="container">
          <div className="about-short-card">
            <div className="about-short-content">
              <div className="section-subtitle">Почему выбирают нас</div>
              <h2>Центр, где рождаются<br />инженеры будущего</h2>
              <p>Более 25 лет мы помогаем юным талантам раскрыть свой потенциал в области технических наук. Наши выпускники становятся студентами ведущих технических вузов и успешными специалистами в сфере высоких технологий.</p>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div className="feature-item" key={index}>
                    <i className={feature.icon}></i>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/about" className="btn-primary">
                <span>Подробнее о центре</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="about-short-image">
              <div className="image-glow"></div>
              <img src="img/e1Cpc_0xhAVXb8ZwH6su-Xtf8IW8ZvF3weUI6pUa7cvM3_UUbBNCEpr_29-3ddFGHzxEQX4OTTsBqIYEo2h0cU7D.jpg" alt="Занятия в центре" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;