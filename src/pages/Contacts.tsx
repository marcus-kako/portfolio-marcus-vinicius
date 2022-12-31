import React from 'react'
import ContactCards from "../components/ContactCards/ContactCards"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

export default function Contacts() {
  return (
    <div className="container-contacts">
      <Header />
      <div className="contacts">
        <span className="contactme-text">Entre em contato!</span>
      </div>
      <div className="contats-images">
        <ContactCards />
      </div>
      <Footer />
    </div>
  )
}
