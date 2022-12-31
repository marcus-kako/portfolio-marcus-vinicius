import React from 'react'
import contactsRepository from '../../service/repositories/ContactsRepository'
import './ContactCards.css'
export default function ContactCards() {
  return (
    <div className="contact-cards">
      { contactsRepository.map((contact) => (
        <a href={ contact.contactUrl } rel="noreferrer" target="_blank" className="link-icon">
          <div className="card" key={ contact.contactName }>
            <span>{ contact.contactName }</span>
            <img src={ contact.contactImage } alt={ contact.contactName } className="img-contact-card" />
          </div>
        </a>
      )) }
    </div>
  )
}
