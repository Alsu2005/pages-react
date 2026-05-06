// pages/ContactsPage.js
import React from 'react';

const ContactsPage = () => {
  const contacts = [
    { icon: "fas fa-map-marker-alt", title: "Адрес", text: "г. Стерлитамак, ул. Коммунистическая, 12", extra: "Пн-Пт: 09:00-19:00, Сб: 09:00-14:00" },
    { icon: "fas fa-phone-alt", title: "Телефон", text: "+7 (3473) 25-55-33", extra: "+7 (3473) 25-55-34 (приемная)" },
    { icon: "fas fa-envelope", title: "Email", text: "cdutt@sterlitamak.ru", extra: "" }
  ];

  return (
    <main>
      <div className="page-banner">
        <div className="container">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами любым удобным способом</p>
        </div>
      </div>

      <section className="contact-info">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-details">
              {contacts.map((contact, index) => (
                <div className="contact-card" key={index}>
                  <div className="contact-icon"><i className={contact.icon}></i></div>
                  <h3>{contact.title}</h3>
                  <p>{contact.text}</p>
                  {contact.extra && <p className="work-hours">{contact.extra}</p>}
                </div>
              ))}
            </div>
            <div className="contact-map">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor&mode=search&text=Стерлитамак+Коммунистическая+12+ЦДЮТТ&z=18" 
                width="100%" 
                height="400" 
                style={{ border: 0, borderRadius: '28px' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Карта центра"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;