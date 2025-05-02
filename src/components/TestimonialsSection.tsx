import { FC, useState } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "../data/testimonials";
import '../styles/TestimonialsSection.css'

export const TestimonialsSection: FC = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за отзыв, ${name}!\n“${text}”`);
    setName("");
    setText("");
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Отзывы клиентов</h2>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        <form className="testimonial-form" onSubmit={handleSubmit}>
          <h3>Оставить отзыв</h3>
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Ваш отзыв"
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
};
