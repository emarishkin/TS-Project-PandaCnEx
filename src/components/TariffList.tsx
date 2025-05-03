import { useEffect, useState } from "react";
import { Tariff } from "../types/Tariff";
import { TariffCard } from "./TariffCard";

export const TariffList = ({ onRequestClick }: { onRequestClick: () => void }) => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/tariffs")
      .then((res) => res.json())
      .then((data) => {
        setTariffs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки тарифов:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка тарифов...</p>;

  return (
    <div style={{display:'flex' , justifyContent:'center', gap:20,margin:'30px 0'}} className="tariff-list">
      {tariffs.map((tariff) => (
        <TariffCard key={tariff.id} tariff={tariff} onRequestClick={onRequestClick} />
      ))}
    </div>
  );
};
