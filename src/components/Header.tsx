import { FC, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';
import logo from '/logo.png';

interface HeaderProps {
  onRequestClick: () => void;
}

export const Header: FC<HeaderProps> = ({ onRequestClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <img className="logo-img" src={logo} alt="logo-panda" />
          <Link to="/">Panda CN Express</Link>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/tariffs" onClick={() => setMenuOpen(false)}>Тарифы</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Услуги</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>О нас</Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>Контакты</Link>
        </nav>

        <div className="right-controls">
          <button className="cta-button" onClick={onRequestClick}>
            Оставить заявку
          </button>
          <button className="burger" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};
