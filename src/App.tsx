import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { ContactForm } from "./components/ContactForm";
import { useState } from "react";

import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactsPage } from "./pages/ContactsPage";
import { AboutPage } from "./pages/AboutPage";
import { TariffPage } from "./components/TariffPage";
import TariffsPage from "./pages/TariffsPage";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openForm = () => setModalOpen(true);
  const closeForm = () => setModalOpen(false);

  return (
    <Router>
      <Header onRequestClick={openForm} />
      <Routes>
        <Route path="/" element={<HomePage onRequestClick={openForm} />} />
        <Route path="/tariffs" element={<TariffsPage onRequestClick={openForm}/>} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tariffs/:id" element={<TariffPage />} />
      </Routes>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeForm}>
        <ContactForm />
      </Modal>
    </Router>
  );
}

export default App;
