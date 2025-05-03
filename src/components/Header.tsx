import { FC } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css'
import logo from '/logo.png'

interface HeaderProps {
  onRequestClick: () => void;
}

export const Header: FC<HeaderProps> = ({ onRequestClick }) => {
  return (
    <header className="header">
      <div className="container header-inner">
      <div className="logo">
          <img className="logo-img" src={logo} alt="logo-panda" />
          <Link to="/">Panda CN Express</Link>
      </div>
      <nav className="nav">
          <Link to="/tariffs">Тарифы</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/about">О нас</Link>
          <Link to="/contacts">Контакты</Link>
      </nav>
      <button className="cta-button" onClick={onRequestClick}>
          Оставить заявку
      </button>
      </div>
    </header>
  );
};
