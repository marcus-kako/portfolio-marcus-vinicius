import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className=" header header-text">
        Marcus Vinicius
      </div>
      <div className="header header-link">
          <Link to='/' className="header-text">
            Home
          </Link>
          <Link to='/about' className="header-text">
            Sobre
          </Link>
          <Link to='/projects' className="header-text">
            Projetos
          </Link>
          <Link to='/skills' className="header-text">
            Skills
          </Link>
          <Link to='/contacts' className="header-text">
            Contatos
          </Link>
      </div>
    </header>
  )
}
