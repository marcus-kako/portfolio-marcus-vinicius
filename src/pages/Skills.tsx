import React from 'react'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SkillsCards from "../components/SkillsCards/SkillsCards"

export default function Skills() {
  return (
    <div className="div-skills">
      <Header />

      <div className="content-skills">
        <SkillsCards />
      </div>

      <Footer />
    </div>
  )
}
