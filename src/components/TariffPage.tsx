import { FC } from "react";
import { useParams } from "react-router-dom";
import { tariffs } from "../data/tariffs";

export const TariffPage: FC = () => {
  const { id } = useParams();
  const tariff = tariffs.find(t => t.id === id);

  if (!tariff) {
    return <div className="container"><h2>Тариф не найден</h2></div>;
  }

  return (
    <div className="container">
      <h1>{tariff.title}</h1>
      <p><strong>Цена:</strong> {tariff.price}</p>
      <ul>
        {tariff.description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
