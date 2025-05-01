import { FC } from "react";
import { Testimonial } from "../types/Testimonial";
import '../styles/TestimonialCard.css'

interface Props {
  testimonial: Testimonial;
}

export const TestimonialCard: FC<Props> = ({ testimonial }) => {
 

  return (
    <div className="testimonial-card">
      <div className="testimonial-avatar">
        {testimonial.avatar? (
          <img src={testimonial.avatar} alt={testimonial.name} className="avatar-img" />
        ):(
          testimonial.name[0]
        )}
      </div>
      <p className="testimonial-text">“{testimonial.text}”</p>
      <p className="testimonial-name">— {testimonial.name}</p>
    </div>
  );
};