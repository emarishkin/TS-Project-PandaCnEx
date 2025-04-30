import { FC } from "react";
import { TariffCard } from "./TariffCard";
import '../styles/TariffsSection.css'
import { tariffs } from "../data/tariffs";

export const TariffsSection: FC = () => {

    return (
      <section className="tariffs-section">
        <div className="container">
          <h2>Тарифы</h2>
          <div className="tariff-grid">
            {tariffs.map((tariff, index) => (
              <TariffCard key={index} tariff={tariff} />
            ))}
          </div>
        </div>
      </section>
    );
  };