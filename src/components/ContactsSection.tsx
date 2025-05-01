
import { FC } from "react";
import '../styles/ContactsSection.css'

export const ContactsSection: FC = () => {
  return (
    <section className="contacts-section" id="contacts">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contacts-grid">
          <div>
            <h4>Телефон</h4>
            <p>+7 (900) 123-45-67</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>info@pandacnexpress.ru</p>
          </div>
          <div>
            <h4>Адрес</h4>
            <p>г. Москва, ул. Примерная, д. 1</p>
          </div>
        </div>
      </div>
    </section>
  );
};
