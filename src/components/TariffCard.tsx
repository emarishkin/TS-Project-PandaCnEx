import { FC } from "react";
import { Tariff } from "../types/Tariff";
import { Link } from "react-router-dom"; 
import '../styles/TariffCard.css'

interface TariffCardProps {
  tariff: Tariff;
  onRequestClick: () => void;
}

export const TariffCard: FC<TariffCardProps> = ({ tariff, onRequestClick }) => {
  const { id, title, price, description } = tariff;

  return (
    <div className="tariff-card">
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="tariff-actions">
        <button className="tariff-button" onClick={onRequestClick}>
          Оставить заявку
        </button>

      
        <Link to={`/tariffs/${id}`} className="tariff-button secondary">
          Подробнее
        </Link>
      </div>
    </div>
  );
};
