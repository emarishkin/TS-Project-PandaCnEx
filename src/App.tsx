import { useState } from 'react'
import './App.css'

import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { Modal } from './components/Modal'
import { TariffsSection } from './components/TariffsSection'
import { WorkflowSection } from './components/WorkflowSection'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { ServicesSection } from './components/ServicesSection'

function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openForm = () => setModalOpen(true);
  const closeForm = () => setModalOpen(false);

  return (
    <>
      <Header onRequestClick={openForm} />
      <HeroSection onRequestClick={openForm} />
      <TariffsSection onRequestClick={openForm} />
      <ServicesSection />
      <WorkflowSection />
      
      <button className="cta-button-fixed" onClick={openForm}>
        Оставить заявку
      </button>

      <Modal isOpen={isModalOpen} onClose={closeForm}>
        <ContactForm />
      </Modal>

      <Footer />
    </>
  )
}

export default App
