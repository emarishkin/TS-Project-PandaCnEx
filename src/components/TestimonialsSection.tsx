import { FC } from "react";
import { testimonials } from "../data/testimonials";
import { TestimonialCard } from "./TestimonialCard";
import '../styles/TestimonialsSection.css'

export const TestimonialsSection: FC = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Отзывы клиентов</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};