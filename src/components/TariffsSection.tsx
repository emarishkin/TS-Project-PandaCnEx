import { FC } from "react";
import { TariffCard } from "./TariffCard";
import '../styles/TariffsSection.css'
import { tariffs } from "../data/tariffs";

interface TariffsSectionProps{
  onRequestClick: () => void;
}


export const TariffsSection: FC<TariffsSectionProps> = ({onRequestClick}) => {

    return (
      <section className="tariffs-section">
        <div className="container">
          <h2>Тарифы</h2>
          <div className="tariff-grid">
            {tariffs.map((tariff, index) => (
              <TariffCard onRequestClick={onRequestClick} key={index} tariff={tariff} />
            ))}
          </div>
        </div>
      </section>
    );
  };