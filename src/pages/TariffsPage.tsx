import { FC } from "react";
import { TariffList } from "../components/TariffList";

interface TariffsPageProps{
    onRequestClick: () => void;
}

const TariffsPage:FC<TariffsPageProps> = ({onRequestClick}) => {
  return (
    <div className="container">
      <h2>Наши тарифы</h2>
      <TariffList onRequestClick={onRequestClick} />
    </div>
  );
};

export default TariffsPage;