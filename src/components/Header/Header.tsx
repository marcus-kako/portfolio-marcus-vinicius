import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className=" header header-name">
        Marcus Vinicius
      </div>
      <div className="header-separator">
        
      </div>
      <div className="header">
        <div className="header-a" id="header-home">
          <Link to='/' className="header-text">
            Home
          </Link>
        </div>
        <div className="header-a" id="header-about">
          <Link to='/about' className="header-text">
            About
          </Link>
        </div>
        <div className="header-a" id="header-projects">
          <Link to='/projects' className="header-text">
            Projects
          </Link>
        </div>
        <div className="header-a" id="header-skills">
          <Link to='/skills' className="header-text">
            Skills
          </Link>
        </div>
        <div className="header-a" id="header-contacts">
          <Link to='/contacts' className="header-text">
            Contacts
          </Link>
        </div>
      </div>
    </header>
  )
}
