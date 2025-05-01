import { FC, useRef } from "react";
import { Service } from "../types/Service";
import '../styles/ServiceCard.css'

interface Props {
  service: Service;
}

export const ServiceCard: FC<Props> = ({ service }) => {
  const { icon, title, text } = service;
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    const icon = iconRef.current;
    const glare = glareRef.current;
    if (!card || !icon || !glare) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    // Параллакс иконки
    const offsetX = (x - centerX) / 10;
    const offsetY = (y - centerY) / 10;
    icon.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    // Glare
    glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.25), transparent 60%)`;
  };

  const resetTransform = () => {
    const card = cardRef.current;
    const icon = iconRef.current;
    const glare = glareRef.current;
    if (card) card.style.transform = "rotateY(0deg) rotateX(0deg)";
    if (icon) icon.style.transform = "translate(0, 0)";
    if (glare) glare.style.background = "none";
  };

  return (
    <div className="card-outer">
      <div
        className="card-inner interactive"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
      >
        <div className="glare" ref={glareRef}></div>
        <div className="card-front">
          <div className="service-icon" ref={iconRef}>{icon}</div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
