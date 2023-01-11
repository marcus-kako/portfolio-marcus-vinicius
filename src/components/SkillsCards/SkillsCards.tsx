import React from 'react'
import skillsRepository from "../../service/repositories/SkillsRepository"
import './SkillsCards.css'

export default function SkillsCards() {
  return (
    <div className="skills-cards">
      { skillsRepository.map((skills) => (
        <div className="skill-card" key={ skills.skillName }>
          <span>{ skills.skillName }</span>
          <img src={ skills.skillImage } alt={ skills.skillName } className="img-skills-card" />
        </div>
      )) }
    </div>
  )
}
