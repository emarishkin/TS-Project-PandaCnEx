import { FC } from "react";
import { ServicesSection } from "../components/ServicesSection";

export const ServicesPage: FC = () => {
  return (
    <div className="container">
      <h1>Все услуги</h1>
      <ServicesSection />
    </div>
  );
};