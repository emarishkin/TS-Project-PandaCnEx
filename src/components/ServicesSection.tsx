import { FC } from "react";
import { services } from "../data/services";
import { ServiceCard } from "./ServiceCard";
import '../styles/ServicesSection.css'

export const ServicesSection:FC = () => {
    return(
        <section className="services-section">
      <div className="container">
        <h2>Наши услуги</h2>
        <div className="services-grid">
          {services.map((service)=>(
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
    )
}