import { useState } from 'react'
import './App.css'

import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { Modal } from './components/Modal'
import { TariffsSection } from './components/TariffsSection'
import { WorkflowSection } from './components/WorkflowSection'
import { ContactForm } from './components/ContactForm'

function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openForm = () => setModalOpen(true);
  const closeForm = () => setModalOpen(false);

  return (
    <>
      <Header onRequestClick={openForm} />
      <HeroSection onRequestClick={openForm} />
      <TariffsSection onRequestClick={openForm} />
      <WorkflowSection />
      
      <button className="cta-button-fixed" onClick={openForm}>
        Оставить заявку
      </button>

      <Modal isOpen={isModalOpen} onClose={closeForm}>
        <ContactForm />
      </Modal>
    </>
  )
}

export default App
