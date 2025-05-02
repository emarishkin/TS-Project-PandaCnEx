import { FC } from "react";
import { HeroSection } from "../components/HeroSection";
import { TariffsSection } from "../components/TariffsSection";
import { ServicesSection } from "../components/ServicesSection";
import { WorkflowSection } from "../components/WorkflowSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactsSection } from "../components/ContactsSection";

interface HomePageProps {
  onRequestClick: () => void;
}

export const HomePage: FC<HomePageProps> = ({ onRequestClick }) => {
  return (
    <>
      <HeroSection onRequestClick={onRequestClick} />
      <TariffsSection onRequestClick={onRequestClick} />
      <ServicesSection />
      <WorkflowSection />
      <TestimonialsSection />
      <ContactsSection />
    </>
  );
};
