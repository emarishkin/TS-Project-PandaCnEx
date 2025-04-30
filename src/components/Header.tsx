import { FC } from "react";
import logo from '/logo.png'
import '../styles/Header.css'
interface HeaderProps{
    onRequestClick: () => void;
}

export const Header:FC<HeaderProps> = ({onRequestClick}) => {
    return (
        <header className="header">
            <div className="container header-inner">
                <div className="logo">
                    <img className="logo-img" src={logo} alt="logo-panda" />
                    <h3>Panda CN Express</h3>
                </div>
                <nav className="nav">
                    <a href="#tariffs">Тарифы</a>
                    <a href="#services">Услуги</a>
                    <a href="#steps">Этапы</a>
                    <a href="#reviews">Отзывы</a>
                    <a href="#contacts">Контакты</a>
                </nav>
            <button className="cta-button" onClick={onRequestClick}>Оставить заявку</button>
            </div>
        </header>
    )
}