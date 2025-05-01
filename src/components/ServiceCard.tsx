import { FC } from "react";
import { Service } from "../types/Service";
import '../styles/ServiceCard.css'

interface ServiceCardProps{
    service:Service
}

export const ServiceCard:FC<ServiceCardProps> = ({service}) => {
    return(
        <div className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
        </div>
    )
}