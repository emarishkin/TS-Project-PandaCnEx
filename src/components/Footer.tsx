import { FC } from "react";
import '../styles/Footer.css'

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-column">
          <h3>Panda CN Express</h3>
          <p>© {new Date().getFullYear()} Все права защищены</p>
        </div>

        <div className="footer-column">
          <h4>Меню</h4>
          <nav className="footer-nav">
            <a href="#tariffs">Тарифы</a>
            <a href="#services">Услуги</a>
            <a href="#steps">Этапы</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>

        <div className="footer-column">
          <h4>Контакты</h4>
          <p>Тел: +7 (900) 123-45-67</p>
          <p>Email: info@pandacnexpress.ru</p>
        </div>
      </div>
    </footer>
  );
};