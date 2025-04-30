import { FC } from "react"
import '../styles/HeroSection.css'

interface HeroSectionProps{
    onRequestClick: () => void;
}

export const HeroSection:FC<HeroSectionProps> = ({onRequestClick}) =>{
    return(
        <section className="hero-section">
            <div className="container hero-content">
                <h1>Надёжная доставка из Китая</h1>
                <p>Организуем перевозку ваших товаров быстро, удобно и по честной цене</p>
                <button className="hero-button" onClick={onRequestClick}>Оставить заявку</button>
            </div>
        </section>
    )
}