import { FC } from "react";
import { ContactsSection } from "../components/ContactsSection";

export const ContactsPage: FC = () => {
  return (
    <div className="container">
      <h1>Контакты</h1>
      <ContactsSection />
    </div>
  );
};
