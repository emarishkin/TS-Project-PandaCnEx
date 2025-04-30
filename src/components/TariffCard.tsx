import { FC } from "react";
import { Tariff } from "../types/Tariff";
import '../styles/TariffCard.css'

interface TariffCardProps{
    tariff:Tariff
    onRequestClick:()=>void
}

export const TariffCard:FC<TariffCardProps> = ({tariff,onRequestClick}) =>{
    
    return(
        <div className="tariff-card">
      <h3>{tariff.title}</h3>
      <p className="price">{tariff.price}</p>
      <ul>
        {tariff.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="tariff-button"  onClick={onRequestClick}>Оставить заявку</button>
    </div>
    )
}